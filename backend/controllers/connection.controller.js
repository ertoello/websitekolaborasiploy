import { sendConnectionAcceptedEmail } from "../emails/emailHandlers.js";
import ConnectionRequest from "../models/connectionRequest.model.js";
import Notification from "../models/notification.model.js";
import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const sendConnectionRequest = async (req, res) => {
  try {
    const { userId } = req.params;
    const senderId = req.user._id;

    // Tidak boleh mengirim permintaan ke diri sendiri
    if (senderId.toString() === userId) {
      return res
        .status(400)
        .json({ message: "You can't send a request to yourself" });
    }

    // Jika sudah terhubung, tolak permintaan
    if (req.user.connections.includes(userId)) {
      return res.status(400).json({ message: "You are already connected" });
    }

    // Jika pengguna yang login memiliki role "admin", langsung terima koneksi
    if (req.user.role === "admin") {
      await User.findByIdAndUpdate(senderId, {
        $addToSet: { connections: userId },
      });
      await User.findByIdAndUpdate(userId, {
        $addToSet: { connections: senderId },
      });

      const notification = new Notification({
        recipient: userId,
        type: "connectionAccepted",
        relatedUser: senderId,
      });
      await notification.save();

      return res
        .status(201)
        .json({ message: "Connection instantly accepted by admin" });
    }

    // Jika bukan "admin", lakukan permintaan koneksi seperti biasa
    const existingRequest = await ConnectionRequest.findOne({
      sender: senderId,
      recipient: userId,
      status: "pending",
    });

    if (existingRequest) {
      return res
        .status(400)
        .json({ message: "A connection request already exists" });
    }

    const newRequest = new ConnectionRequest({
      sender: senderId,
      recipient: userId,
    });

    await newRequest.save();

    res.status(201).json({ message: "Connection request sent successfully" });
  } catch (error) {
    console.error("Error in sendConnectionRequest controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const acceptConnectionRequest = async (req, res) => {
	try {
		const { requestId } = req.params;
		const userId = req.user._id;

		const request = await ConnectionRequest.findById(requestId)
			.populate("sender", "name email username")
			.populate("recipient", "name username");

		if (!request) {
			return res.status(404).json({ message: "Connection request not found" });
		}

		// check if the req is for the current user
		if (request.recipient._id.toString() !== userId.toString()) {
			return res.status(403).json({ message: "Not authorized to accept this request" });
		}

		if (request.status !== "pending") {
			return res.status(400).json({ message: "This request has already been processed" });
		}

		request.status = "accepted";
		await request.save();

		// if im your friend then ur also my friend ;)
		await User.findByIdAndUpdate(request.sender._id, { $addToSet: { connections: userId } });
		await User.findByIdAndUpdate(userId, { $addToSet: { connections: request.sender._id } });

		const notification = new Notification({
			recipient: request.sender._id,
			type: "connectionAccepted",
			relatedUser: userId,
		});

		await notification.save();

		res.json({ message: "Connection accepted successfully" });

		const senderEmail = request.sender.email;
		const senderName = request.sender.name;
		const recipientName = request.recipient.name;
		const profileUrl = process.env.CLIENT_URL + "/profile/" + request.recipient.username;

		try {
			await sendConnectionAcceptedEmail(senderEmail, senderName, recipientName, profileUrl);
		} catch (error) {
			console.error("Error in sendConnectionAcceptedEmail:", error);
		}
	} catch (error) {
		console.error("Error in acceptConnectionRequest controller:", error);
		res.status(500).json({ message: "Server error" });
	}
};

export const rejectConnectionRequest = async (req, res) => {
	try {
		const { requestId } = req.params;
		const userId = req.user._id;

		const request = await ConnectionRequest.findById(requestId);

		if (request.recipient.toString() !== userId.toString()) {
			return res.status(403).json({ message: "Not authorized to reject this request" });
		}

		if (request.status !== "pending") {
			return res.status(400).json({ message: "This request has already been processed" });
		}

		request.status = "rejected";
		await request.save();

		res.json({ message: "Connection request rejected" });
	} catch (error) {
		console.error("Error in rejectConnectionRequest controller:", error);
		res.status(500).json({ message: "Server error" });
	}
};

export const getConnectionRequests = async (req, res) => {
  try {
    const userId = req.user._id;

    const requests = await ConnectionRequest.find({
      recipient: userId,
      status: "pending",
    })
      .sort({ createdAt: -1 }) // ← Tambahkan sorting agar urut dari yang terbaru
      .populate(
        "sender",
        "name username profilePicture headline connections role "
      );

    res.json(requests);
  } catch (error) {
    console.error("Error in getConnectionRequests controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserConnections = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).populate(
      "connections",
      "name username profilePicture headline connections role lastLogin"
    );

    const connectionIds = user.connections.map((c) => c._id);

    // Ambil pesan terakhir dari masing-masing koneksi
    const latestMessages = await Message.aggregate([
      {
        $match: {
          $or: [
            { senderId: userId, receiverId: { $in: connectionIds } },
            { receiverId: userId, senderId: { $in: connectionIds } },
          ],
        },
      },
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: {
            $cond: [{ $eq: ["$senderId", userId] }, "$receiverId", "$senderId"],
          },
          lastMessageAt: { $first: "$createdAt" },
        },
      },
    ]);

    // Buat map dari ID koneksi ke waktu pesan terakhir
    const messageMap = new Map();
    latestMessages.forEach((msg) => {
      messageMap.set(String(msg._id), msg.lastMessageAt);
    });

    // Urutkan: 1) berdasarkan pesan terakhir, 2) lalu lastLogin jika belum ada pesan
    const sortedConnections = user.connections.sort((a, b) => {
      const aMsg = messageMap.get(String(a._id));
      const bMsg = messageMap.get(String(b._id));

      if (aMsg && bMsg) {
        return new Date(bMsg) - new Date(aMsg);
      } else if (aMsg) {
        return -1; // a punya pesan, b tidak => a duluan
      } else if (bMsg) {
        return 1; // b punya pesan, a tidak => b duluan
      } else {
        // Keduanya tidak punya pesan => pakai lastLogin
        return new Date(b.lastLogin) - new Date(a.lastLogin);
      }
    });

    res.json(sortedConnections);
  } catch (error) {
    console.error("Error in getUserConnections controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const removeConnection = async (req, res) => {
	try {
		const myId = req.user._id;
		const { userId } = req.params;

		await User.findByIdAndUpdate(myId, { $pull: { connections: userId } });
		await User.findByIdAndUpdate(userId, { $pull: { connections: myId } });

		res.json({ message: "Connection removed successfully" });
	} catch (error) {
		console.error("Error in removeConnection controller:", error);
		res.status(500).json({ message: "Server error" });
	}
};

export const getConnectionStatus = async (req, res) => {
	try {
		const targetUserId = req.params.userId;
		const currentUserId = req.user._id;

		const currentUser = req.user;
		if (currentUser.connections.includes(targetUserId)) {
			return res.json({ status: "connected" });
		}

		const pendingRequest = await ConnectionRequest.findOne({
			$or: [
				{ sender: currentUserId, recipient: targetUserId },
				{ sender: targetUserId, recipient: currentUserId },
			],
			status: "pending",
		});

		if (pendingRequest) {
			if (pendingRequest.sender.toString() === currentUserId.toString()) {
				return res.json({ status: "pending" });
			} else {
				return res.json({ status: "received", requestId: pendingRequest._id });
			}
		}

		// if no connection or pending req found
		res.json({ status: "not_connected" });
	} catch (error) {
		console.error("Error in getConnectionStatus controller:", error);
		res.status(500).json({ message: "Server error" });
	}
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select(
      "_id name email"
    ); // Ambil hanya ID, nama, dan email
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getConnectionsByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username }).populate(
      "connections",
      "name username profilePicture headline role"
    );

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    res.json(user.connections);
  } catch (error) {
    console.error("Error in getConnectionsByUsername:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const cancelConnectionRequest = async (req, res) => {
  try {
    const { userId } = req.params; // orang yang menerima permintaan
    const senderId = req.user._id;

    const request = await ConnectionRequest.findOne({
      sender: senderId,
      recipient: userId,
      status: "pending",
    });

    if (!request) {
      return res
        .status(404)
        .json({ message: "No pending connection request found" });
    }

    await ConnectionRequest.findByIdAndDelete(request._id);

    res.json({ message: "Connection request canceled successfully" });
  } catch (error) {
    console.error("Error in cancelConnectionRequest controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};
  