import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import {
  Loader,
  MessageCircle,
  Send,
  Share2,
  ThumbsUp,
  Trash2,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import Modalnotif from "./Modalnotif"; // pastikan path sesuai struktur kamu
import PostAction from "./PostAction";
// import DOMPurify from "dompurify";

const Post = ({ post }) => {
  const { postId } = useParams();

  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const response = await axiosInstance.get("/auth/me");
      return response.data;
    },
    initialData: null, // Bisa juga diisi dengan data default dari localStorage
  });
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);
  const isOwner = authUser?._id === post.author._id;
  const isLiked = post.likes.includes(authUser?._id);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });
  const queryClient = useQueryClient();
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const { mutate: deletePost, isPending: isDeletingPost } = useMutation({
    mutationFn: async () => {
      await axiosInstance.delete(`/posts/delete/${post._id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setModalContent({
        title: "Berhasil",
        message: "Postingan Berhasil Dihapus!",
      });
      setModalOpen(true);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      setModalContent({
        title: "Gagal",
        message: err.response?.data?.message || "Gagal Hapus postingan.",
      });
      setModalOpen(true);
    },
  });
  
  const { mutate: deleteComment } = useMutation({
    mutationFn: async (commentId) => {
      await axiosInstance.delete(`/posts/${post._id}/comments/${commentId}`);
    },
    onSuccess: (data, commentId) => {
      // Update state local langsung
      setComments((prev) =>
        prev.filter((comment) => comment._id !== commentId)
      );

      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setModalContent({
        title: "Berhasil",
        message: "Komentar Berhasil Dihapus!",
      });
      setModalOpen(true);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: () => {
      toast.error("Gagal menghapus komentar (referesh browser anda!!!)");
    },
  });
    
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  

  const { mutate: createComment, isPending: isAddingComment } = useMutation({
    mutationFn: async (newComment) => {
      await axiosInstance.post(`/posts/${post._id}/comment`, {
        content: newComment,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setModalContent({
        title: "Berhasil",
        message: "Komentar Berhasil Ditambahkan!",
      });
      setModalOpen(true);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => {
      setModalContent({
        title: "Gagal",
        message: err.response?.data?.message || "Gagal Menambah Komentar.",
      });
      setModalOpen(true);
    },
  });

  const { mutate: likePost, isPending: isLikingPost } = useMutation({
    mutationFn: async () => {
      await axiosInstance.post(`/posts/${post._id}/like`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", postId] });
    },
  });


  const handleLikePost = async () => {
    if (isLikingPost) return;
    likePost();
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      createComment(newComment);
      setNewComment("");
      setComments([
        ...comments,
        {
          content: newComment,
          user: {
            _id: authUser._id,
            name: authUser.name,
            profilePicture: authUser.profilePicture,
          },
          createdAt: new Date(),
        },
      ]);
    }
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/post/${post._id}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Lihat postingan ini!",
          text: "Cek postingan keren ini!",
          url: url,
        });
        // Tidak perlu feedback jika berhasil atau dibatalkan
      } catch (err) {
        // Jangan tampilkan apapun (asumsikan ini karena user membatalkan share)
        // Jika kamu ingin log internal (tidak tampil di UI), boleh:
        console.warn("Share dibatalkan atau error:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        toast.success("Link berhasil disalin ke clipboard!");
      } catch (err) {
        toast.error("Gagal menyalin link.");
      }
    }
  };  

  return (
    <div className="bg-secondary rounded-lg shadow mb-4">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Link to={`/profile/${post?.author?.username}`}>
              <img
                src={post.author.profilePicture || "/avatar.png"}
                alt={post.author.name}
                className="size-10 rounded-full mr-3"
              />
            </Link>

            <div>
              <Link to={`/profile/${post?.author?.username}`}>
                <h3 className="font-semibold flex items-center gap-1">
                  {post.author.name}
                  {post?.author?.role === "admin" && (
                    <img
                      src="/admin.png"
                      alt="Verified"
                      className="w-5 h-5 object-contain"
                    />
                  )}
                </h3>
              </Link>
              <p className="text-xs text-info">{post.author.headline}</p>
              <p className="text-xs text-info">
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                  locale: id,
                })}
              </p>
            </div>
          </div>
          {isOwner && (
            <button
              onClick={() => setShowDeleteModal(true)}
              className="text-red-500 hover:text-red-700"
            >
              {isDeletingPost ? (
                <Loader size={18} className="animate-spin" />
              ) : (
                <Trash2 size={18} />
              )}
            </button>
          )}

          {showDeleteModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-lg font-semibold mb-4">Hapus Postingan?</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Apakah kamu yakin ingin menghapus postingan ini? Tindakan ini
                  tidak bisa dibatalkan.
                </p>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                  >
                    Batal
                  </button>
                  <button
                    onClick={() => {
                      deletePost();
                      setShowDeleteModal(false);
                    }}
                    className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white text-sm"
                  >
                    Hapus!
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="prose max-w-none break-words whitespace-pre-wrap overflow-hidden border border-gray-300 shadow-md hover:shadow-lg p-4 transition-all duration-300 rounded-md"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="rounded-md w-full mb-4 border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300"
          />
        )}

        <div className="flex justify-between text-info mt-4">
          <PostAction
            icon={
              <ThumbsUp
                size={18}
                className={isLiked ? "text-blue-500  fill-blue-300" : ""}
              />
            }
            text={`Like (${post.likes.length})`}
            onClick={handleLikePost}
          />

          <PostAction
            icon={<MessageCircle size={18} />}
            text={`Comment (${comments.length})`}
            onClick={() => setShowComments(!showComments)}
          />
          <PostAction
            icon={<Share2 size={18} />}
            text="Share"
            onClick={handleShare}
          />
        </div>
      </div>

      {showComments && (
        <div className="px-4 pb-4">
          <div className="mb-4 max-h-60 overflow-y-auto">
            {comments.map((comment) => {
              const isCommentOwner = authUser?._id === comment.user._id;

              return (
                <div
                  key={comment._id}
                  className="mb-2 bg-base-100 p-2 rounded flex items-start justify-between"
                >
                  <div className="flex">
                    <img
                      src={comment.user.profilePicture || "/avatar.png"}
                      alt={comment.user.name}
                      className="w-8 h-8 rounded-full mr-2 flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold">{comment.user.name}</p>
                      <p className="text-sm text-gray-700">{comment.content}</p>
                      <p className="text-xs text-gray-400">
                        {formatDistanceToNow(new Date(comment.createdAt), {
                          addSuffix: true,
                          locale: id,
                        })}
                      </p>
                    </div>
                  </div>

                  {isCommentOwner && (
                    <div className="relative ml-2">
                      <button
                        onClick={() =>
                          setSelectedCommentId(
                            selectedCommentId === comment._id
                              ? null
                              : comment._id
                          )
                        }
                        className="text-gray-900 hover:text-black"
                      >
                        &#8942; {/* Unicode untuk tiga titik vertikal */}
                      </button>

                      {selectedCommentId === comment._id && (
                        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
                          <button
                            onClick={() => deleteComment(comment._id)}
                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                          >
                            Hapus
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <form onSubmit={handleAddComment} className="flex items-center">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-grow p-2 rounded-l-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-r-full hover:bg-primary-dark transition duration-300"
              disabled={isAddingComment}
            >
              {isAddingComment ? (
                <Loader size={18} className="animate-spin" />
              ) : (
                <Send size={18} />
              )}
            </button>
          </form>
        </div>
      )}
      <Modalnotif
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        message={modalContent.message}
      />
    </div>
  );
};
export default Post;
