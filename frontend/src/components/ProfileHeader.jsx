import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";

import {
  Camera,
  Clock,
  MapPin,
  UserCheck,
  UserPlus,
  X,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ userData, onSave, isOwnProfile }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedData, setEditedData] = useState({});
	const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [showConnectionsModal, setShowConnectionsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionList, setConnectionList] = useState([]);

  const handleConnectionsClick = async (username) => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.get(`/connections/user/${username}`);
      setConnectionList(res.data);
      setShowConnectionsModal(true);
    } catch (err) {
      console.error("Gagal mengambil koneksi:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowConnectionsModal(false);
  };

  const handleGoToMessages = () => {
    navigate(`/messages/${userData._id}`);
  };

	const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const response = await axiosInstance.get("/auth/me");
      return response.data;
    },
  });

	const { data: connectionStatus, refetch: refetchConnectionStatus } = useQuery({
		queryKey: ["connectionStatus", userData._id],
		queryFn: () => axiosInstance.get(`/connections/status/${userData._id}`),
		enabled: !isOwnProfile,
	});

	const isConnected = userData.connections.some((connection) => connection === authUser._id);

	const { mutate: sendConnectionRequest } = useMutation({
		mutationFn: (userId) => axiosInstance.post(`/connections/request/${userId}`),
		onSuccess: () => {
			toast.success("Connection request sent");
			refetchConnectionStatus();
			queryClient.invalidateQueries(["connectionRequests"]);
		},
		onError: (error) => {
			toast.error(error.response?.data?.message || "An error occurred");
		},
	});

	const { mutate: acceptRequest } = useMutation({
		mutationFn: (requestId) => axiosInstance.put(`/connections/accept/${requestId}`),
		onSuccess: () => {
			toast.success("Connection request accepted");
			refetchConnectionStatus();
			queryClient.invalidateQueries(["connectionRequests"]);
		},
		onError: (error) => {
			toast.error(error.response?.data?.message || "An error occurred");
		},
	});

	const { mutate: rejectRequest } = useMutation({
		mutationFn: (requestId) => axiosInstance.put(`/connections/reject/${requestId}`),
		onSuccess: () => {
			toast.success("Connection request rejected");
			refetchConnectionStatus();
			queryClient.invalidateQueries(["connectionRequests"]);
		},
		onError: (error) => {
			toast.error(error.response?.data?.message || "An error occurred");
		},
	});

	const { mutate: removeConnection } = useMutation({
		mutationFn: (userId) => axiosInstance.delete(`/connections/${userId}`),
		onSuccess: () => {
			toast.success("Connection removed");
			refetchConnectionStatus();
			queryClient.invalidateQueries(["connectionRequests"]);
		},
		onError: (error) => {
			toast.error(error.response?.data?.message || "An error occurred");
		},
	});

	const getConnectionStatus = useMemo(() => {
    if (connectionStatus?.data?.status) {
      return connectionStatus.data.status; // prioritaskan dari server
    }
    if (isConnected) return "connected";
    return "not_connected";
  }, [isConnected, connectionStatus]);
  

	const renderConnectionButton = () => {
    const baseClass =
      "text-white py-2 px-4 rounded-full transition duration-300 flex items-center justify-center";

    // Jika role adalah "admin", tampilkan tombol disabled
    if (userData.role === "admin") {
      return (
        <div className={`${baseClass} bg-green-700 cursor-not-allowed`}>
          <UserCheck size={20} className="mr-2" />
          Terkoneksi Otomatis
        </div>
      );
    }

    switch (getConnectionStatus) {
      case "connected":
        return (
          <div className="flex flex-wrap gap-2 justify-center">
            <div className={`${baseClass} bg-green-500 hover:bg-green-600`}>
              <UserCheck size={20} className="mr-2" />
              Connected
            </div>
            <button
              className={`${baseClass} hover:bg-[#EF8B8B] bg-red-600 text-sm`}
              onClick={() => removeConnection(userData._id)}
            >
              <X size={20} className="mr-2" />
              Remove Connection
            </button>
          </div>
        );
      case "pending":
        return (
          <button
            onClick={() => cancelRequest(userData._id)}
            className={`${baseClass} bg-yellow-500 hover:bg-yellow-600`}
            title="Click to cancel request"
          >
            <Clock size={20} className="mr-2" />
            Pending
          </button>
        );

      case "received":
        return (
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => acceptRequest(connectionStatus.data.requestId)}
              className={`${baseClass} bg-green-500 hover:bg-green-600`}
            >
              Accept
            </button>
            <button
              onClick={() => rejectRequest(connectionStatus.data.requestId)}
              className={`${baseClass} bg-[#EF8B8B] hover:bg-red-600`}
            >
              Reject
            </button>
          </div>
        );
      default:
        return (
          <button
            onClick={() => sendConnectionRequest(userData._id)}
            className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-full transition duration-300 flex items-center justify-center"
          >
            <UserPlus size={20} className="mr-2" />
            Connect
          </button>
        );
    }
  };

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setEditedData((prev) => ({ ...prev, [event.target.name]: reader.result }));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSave = () => {
		onSave(editedData);
		setIsEditing(false);
	};

  const { data: userPostsData } = useQuery({
  queryKey: ["postsByUser", userData.username],
  queryFn: async () => {
    const response = await axiosInstance.get(
      `/posts/user/${userData.username}`
    );
    return response.data; // kamu *berharap* ini berupa { total, posts }
  },
  enabled: !!userData.username,
});

const { mutate: cancelRequest } = useMutation({
  mutationFn: (userId) =>
    axiosInstance.delete(`/connections/cancel-request/${userId}`),
  onSuccess: () => {
    toast.success("Connection request canceled");
    refetchConnectionStatus();
    queryClient.invalidateQueries(["connectionRequests"]);
  },
  onError: (error) => {
    toast.error(error.response?.data?.message || "An error occurred");
  },
});


	return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-2 shadow-xl">
      {/* Bagian Kiri - Profile */}
      <div className="md:col-span-2 bg-white shadow-lg rounded-lg space-y-3 flex flex-col items-center">
        <div className="bg-white w-full">
          <div
            className="relative h-32 md:h-48 rounded-t-lg bg-contain bg-center bg-no-repeat bg-gray-200"
            style={{
              backgroundImage: `url('${
                editedData.bannerImg || userData.bannerImg || "/banner.png"
              }')`,
            }}
          >
            {isEditing && (
              <label className="absolute top-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer">
                <Camera size={20} />
                <input
                  type="file"
                  className="hidden"
                  name="bannerImg"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </label>
            )}
          </div>

          <div className="p-4">
            <div className="relative -mt-20 mb-4">
              <img
                className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover"
                src={
                  editedData.profilePicture ||
                  userData.profilePicture ||
                  "/avatar.png"
                }
                alt={userData.name}
              />

              {isEditing && (
                <label className="absolute bottom-0 right-1/2 transform translate-x-16 bg-white p-2 rounded-full shadow cursor-pointer">
                  <Camera size={20} />
                  <input
                    type="file"
                    className="hidden"
                    name="profilePicture"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </label>
              )}
            </div>

            <div className="text-center mb-4">
              {isEditing ? (
                <input
                  type="text"
                  value={editedData.name ?? userData.name}
                  onChange={(e) =>
                    setEditedData({ ...editedData, name: e.target.value })
                  }
                  className="text-2xl font-bold mb-2 text-center w-full"
                />
              ) : (
                <div className="flex justify-center items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold">{userData.name}</h1>
                  {userData?.role === "admin" && (
                    <img
                      src="/admin.png"
                      alt="Admin Badge"
                      className="w-7 h-7 object-contain"
                      title="Admin"
                    />
                  )}
                </div>
              )}

              {isEditing ? (
                <input
                  type="text"
                  value={editedData.headline ?? userData.headline}
                  onChange={(e) =>
                    setEditedData({ ...editedData, headline: e.target.value })
                  }
                  className="text-gray-600 text-center w-full"
                />
              ) : (
                <p className="text-gray-600">{userData.headline}</p>
              )}

              <div className="flex justify-center items-center mt-2">
                <MapPin size={16} className="text-gray-500 mr-1" />
                {isEditing ? (
                  <input
                    type="text"
                    value={editedData.location ?? userData.location}
                    onChange={(e) =>
                      setEditedData({ ...editedData, location: e.target.value })
                    }
                    className="text-gray-600 text-center"
                  />
                ) : (
                  <span className="text-gray-600">{userData.location}</span>
                )}
              </div>
            </div>

            {isOwnProfile ? (
              isEditing ? (
                <button
                  className="w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark
							 transition duration-300"
                  onClick={handleSave}
                >
                  Save Profile
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-[#3FA3CE] hover:bg-[#78C1E4] text-white py-2 px-4 rounded-full"
                >
                  Edit Profile
                </button>
              )
            ) : (
              <div className="flex justify-center">
                {renderConnectionButton()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bagian Kanan - Statistika & Aksi */}
      {/* Sidebar kanan yang mewah dan interaktif */}
      <div className="md:col-span-1 backdrop-blur-lg bg-white/80 shadow-xl rounded-3xl px-6 py-8 space-y-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-[#2B7A98]">
          Statistik Pengguna
        </h2>

        {/* Koneksi */}
        <button
          onClick={() => handleConnectionsClick(userData.username)}
          className="w-full flex items-center justify-between bg-gradient-to-tr from-white to-blue-50 hover:to-blue-100 transition-all duration-300 border border-blue-200 rounded-2xl px-5 py-4 shadow-sm group"
        >
          <div className="flex items-center gap-3 text-gray-700 font-medium group-hover:text-blue-600">
            Jumlah Koneksi
          </div>
          <div className="bg-[#3FA3CE] text-white font-bold text-lg px-4 py-2 rounded-lg shadow-sm inline-block">
            {userData?.connections?.length ?? 0}
          </div>
        </button>

        {showConnectionsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-xl bg-white rounded-2xl p-4 shadow-2xl animate-scaleIn">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Daftar Koneksi
              </h2>

              {isLoading ? (
                <div className="text-center text-gray-600">Memuat...</div>
              ) : connectionList.length === 0 ? (
                <div className="text-center text-gray-600">
                  Belum ada koneksi.
                </div>
              ) : (
                <ul className="divide-y divide-gray-100 max-h-72 overflow-y-auto">
                  {connectionList.map((conn) => (
                    <li key={conn._id} className="flex items-center gap-4 py-3">
                      <img
                        src={conn.profilePicture || "/avatar.png"}
                        alt={conn.name}
                        className="w-12 h-12 rounded-full border"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {conn.name}
                        </p>
                        <p className="text-sm text-gray-500">{conn.headline}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* Total Postingan */}
        <div className="w-full flex items-center justify-between bg-gradient-to-tr from-white to-indigo-50 border border-indigo-200 rounded-2xl px-5 py-4 shadow-sm">
          <div className="flex items-center gap-3 text-gray-700 font-medium">
            Total Postingan
          </div>
          <div className="bg-[#3FA3CE] text-white font-bold text-lg px-4 py-2 rounded-lg shadow-sm inline-block">
            {userPostsData?.length ?? 0}
          </div>
        </div>

        {/* Tombol Chat */}
        {!isOwnProfile && (
          <button
            onClick={handleGoToMessages}
            className="w-full bg-[#3FA3CE] hover:bg-[#2B7A98] text-white py-3 font-semibold rounded-2xl shadow-md"
          >
            Chat dengan {userData.name}
          </button>
        )}
      </div>
    </div>
  );
};
export default ProfileHeader;
