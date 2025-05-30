import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useEffect, useRef, useState} from "react";
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
  const [openMenuId, setOpenMenuId] = useState(null);

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
                <div className="chat-bubble flex flex-col bg-[#c7e3f0] text-white break-words relative">
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="sm:max-w-[200px] rounded-md mb-2"
                    />
                  )}
                  {message.text && (
                    <div
                      className="prose max-w-none break-normal whitespace-pre-wrap overflow-visible pr-2"
                      dangerouslySetInnerHTML={{ __html: message.text }}
                    />
                  )}

                  {/* Tombol titik tiga */}
                  {isMyMessage && (
                    <div className="absolute top-1 right-1">
                      <button
                        onClick={() =>
                          setOpenMenuId(
                            openMenuId === message._id ? null : message._id
                          )
                        }
                        className="text-white text-lg hover:text-gray-300"
                        title="Opsi Pesan"
                      >
                        ⋮
                      </button>

                      {/* Menu Dropdown */}
                      {openMenuId === message._id && (
                        <div className="absolute right-0 mt-1 bg-white text-black rounded shadow z-10 min-w-[80px]">
                          <button
                            onClick={() => {
                              handleDeleteMessage(message._id);
                              setOpenMenuId(null); // Tutup menu setelah hapus
                            }}
                            className="w-full px-3 py-1 hover:bg-red-100 text-left text-sm"
                          >
                            Hapus
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
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
