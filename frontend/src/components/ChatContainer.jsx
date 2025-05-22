import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useChatStore } from "../store/useChatStore";
import { formatMessageTime } from "../lib/utils";

// Fetch user authentication data
const fetchAuthUser = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};

const ChatContainer = () => {
  // React Query untuk mengambil data user
  const {
    data: authUser,
    isLoading: isAuthLoading,
    isError,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: fetchAuthUser,
    staleTime: 1000 * 60 * 5, // Cache selama 5 menit
  });

  // State dan fungsi dari useChatStore
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
    initSocket,
  } = useChatStore();

  const messageEndRef = useRef(null);

  // Fungsi hapus pesan
  const handleDeleteMessage = async (messageId) => {
    try {
      await axiosInstance.delete(`/messages/hapus/${messageId}`);
      toast.success("Pesan berhasil dihapus");

      // Refresh pesan setelah dihapus
      if (selectedUser?._id) {
        getMessages(selectedUser._id);
      }
    } catch (error) {
      toast.error("Gagal menghapus pesan");
      console.error("Delete message error:", error);
    }
  };

  // Inisialisasi socket saat pertama kali render
  useEffect(() => {
    initSocket();
  }, []);

  // Mengambil pesan dan subscribe ke socket saat selectedUser berubah
  useEffect(() => {
    if (selectedUser?._id) {
      getMessages(selectedUser._id);
      subscribeToMessages();
    }

    return () => unsubscribeFromMessages();
  }, [
    selectedUser?._id,
    getMessages,
    subscribeToMessages,
    unsubscribeFromMessages,
  ]);

  // Scroll otomatis ke pesan terbaru
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isAuthLoading || isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-red-500 text-center">Gagal mengambil data pengguna!</p>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          const isMyMessage = message.senderId === authUser._id;

          return (
            <div
              key={message._id}
              className={`chat ${isMyMessage ? "chat-end" : "chat-start"}`}
              ref={messageEndRef}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounded-full border">
                  <img
                    src={
                      isMyMessage
                        ? authUser.profilePicture || "/avatar.png"
                        : selectedUser?.profilePicture || "/avatar.png"
                    }
                    alt="profile picture"
                  />
                </div>
              </div>
              <div className="chat-header mb-1">
                <time className="text-xs opacity-50 ml-1">
                  {formatMessageTime(message.createdAt)}
                </time>
              </div>
              <div className="relative group">
                <div className="chat-bubble flex flex-col bg-[#EF8B8B] text-white break-words">
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="sm:max-w-[200px] rounded-md mb-2"
                    />
                  )}
                  {message.text && (
                    <div
                      className="prose max-w-none break-words whitespace-pre-wrap overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: message.text }}
                    />
                  )}
                </div>

                {/* Tombol Hapus, hanya muncul jika itu pesan saya */}
                {isMyMessage && (
                  <button
                    onClick={() => handleDeleteMessage(message._id)}
                    className="absolute top-0 right-0 -mt-3 -mr-3 bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Hapus Pesan"
                  >
                    🗑️
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
