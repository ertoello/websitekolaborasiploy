import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import Sidebar from "../components/Sidebar";
import PostCreation from "../components/PostCreation";
import Post from "../components/Post";
import { Users } from "lucide-react";
import RecommendedUser from "../components/RecommendedUser";
import VerifiedUsers from "../components/VerifiedUsers";
import TermsAndConditions from "../components/TermsAndConditions";
import CategoryFilter from "../components/CategoryFilter";
import MobileBottomNavbar from "../components/MobileBottomNavbar";
import { InView } from "react-intersection-observer";

const HomePage = () => {
  const [page, setPage] = useState(1); // State untuk halaman saat ini
  const limit = 7; // Jumlah pengguna per halaman
  const [category, setCategory] = useState("penting");
  const queryClient = useQueryClient();
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [showMobilePost, setShowMobilePost] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const response = await axiosInstance.get("/auth/me");
      return response.data;
    },
    initialData: null,
  });

  // Ambil daftar pengguna hanya jika username adalah 'pengurusdesa'
  const { data: allUsers } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const response = await axiosInstance.get("/messages/users");
      return response.data;
    },
    enabled: authUser?.role === "admin", // Hanya fetch data jika username cocok
  });

  const { data: unreadCounts } = useQuery({
    queryKey: ["unreadPostCounts"],
    queryFn: async () => {
      const res = await axiosInstance.get("/notifications/notif/count-unread-posts");
      return res.data;
    },
  });

  const markCategoryAsRead = async (categoryName) => {
    try {
      await axiosInstance.post(
        "/notifications/notif/mark-post-read-by-category",
        {
          category: categoryName,
        }
      );
      queryClient.invalidateQueries(["unreadPostCounts"]); // Refresh badge count
    } catch (error) {
      console.error("Failed to mark notifications as read", error);
    }
  };

  const { data: recommendedData } = useQuery({
    queryKey: ["recommendedUsers", page], // Query akan diperbarui setiap kali `page` berubah
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/users/suggestions?page=${page}&limit=${limit}`
      );
      return res.data;
    },
  });

  const { data: posts = [] } = useQuery({
    queryKey: ["posts", category],
    queryFn: async () => {
      const endpoint =
        category === "all" ? "/posts" : `/posts?category=${category}`;
      const res = await axiosInstance.get(endpoint);
      return res.data || []; // jaga-jaga return array kosong kalau API gak return apa-apa
    },
    onError: (error) => {
      console.error("Gagal ambil posts:", error);
    },
  });


  const recommendedUsers = recommendedData?.users || [];
  const totalPages = recommendedData?.totalPages || 1; // Ambil total halaman dari API

  console.log("posts", posts);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="hidden lg:block fixed top-0 left-0 h-screen overflow-y-auto w-[18rem] pt-20 pl-4">
        <Sidebar user={authUser} />
        {/* Syarat dan Ketentuan berada di luar sidebar */}
        <TermsAndConditions />
      </div>

      <div className="col-span-1 lg:col-span-9 order-first lg:order-none lg:ml-[18rem]">
        <div className="hidden lg:block bg-secondary rounded-lg shadow mb-4 p-4">
          <PostCreation user={authUser} />
        </div>
        <CategoryFilter
          category={category}
          setCategory={setCategory}
          unreadCounts={unreadCounts}
          markCategoryAsRead={markCategoryAsRead}
        />

        {posts.slice(0, visibleCount).map((post) => (
          <Post key={post._id} post={post} />
        ))}

        {posts.length === 0 && (
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-10 text-center animate-fade-in transition-all duration-500 ease-in-out">
            <div className="mb-6">
              <Users
                size={64}
                className="mx-auto text-blue-500 animate-bounce"
              />
            </div>
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800 tracking-wide">
              Belum Ada Postingan
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Ayo mulai terhubung dengan pengguna lain dan jadilah yang pertama
              membagikan sesuatu yang menarik!
            </p>
          </div>
        )}

        {visibleCount < posts.length && (
          <InView
            onChange={(inView) => {
              if (inView) {
                setVisibleCount((prev) => prev + 5); // Tambah 5 post lagi
              }
            }}
          >
            {({ ref }) => (
              <div ref={ref} className="h-10 flex justify-center items-center">
                <span className="text-gray-500 text-sm animate-pulse">
                  Memuat lebih banyak...
                </span>
              </div>
            )}
          </InView>
        )}
      </div>

      <div className="lg:col-span-3 hidden lg:block">
        <div className="bg-secondary rounded-lg shadow p-4 mb-4">
          <h2 className="font-semibold mb-4 text-sm text-center">
            Rekomendasi Teman Untuk Anda
          </h2>

          {recommendedUsers?.length > 0 ? (
            recommendedUsers.map((user) => (
              <RecommendedUser key={user._id} user={user} />
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center">
              Belum ada rekomendasi teman.
            </p>
          )}

          <div className="overflow-x-auto">
            <div className="flex justify-center mt-6 gap-x-1 w-max">
              <button
                className={`px-3 py-1 text-sm rounded-md transition-all ${
                  page === 1
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                }`}
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                ← Prev
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 text-sm rounded-md transition-all shadow-sm ${
                    page === index + 1
                      ? "bg-blue-700 text-white font-semibold"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className={`px-3 py-1 text-sm rounded-md transition-all ${
                  page === totalPages
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                }`}
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
        <VerifiedUsers authUser={authUser} allUsers={allUsers} />
      </div>

      <MobileBottomNavbar
        onLeftSidebarToggle={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
        onRightSidebarToggle={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
        setShowMobilePost={setShowMobilePost}
      />

      {/* Sidebar kiri versi mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-[20rem] bg-white z-50 shadow-lg transform transition-transform duration-300 lg:hidden ${
          isLeftSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center bg-gray-400 text-white">
          <span className="font-bold">Menu</span>
          <button
            onClick={() => setIsLeftSidebarOpen(false)}
            className="text-white text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-3.5rem)]">
          <Sidebar user={authUser} />
          <TermsAndConditions />
        </div>
      </div>

      {/* Overlay buat sidebar kiri */}
      {isLeftSidebarOpen && (
        <div
          onClick={() => setIsLeftSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
        />
      )}

      {showMobilePost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center lg:hidden">
          <div className="bg-white rounded-lg p-4 w-full max-w-md mx-auto">
            <PostCreation user={authUser} />
            <button
              onClick={() => setShowMobilePost(false)}
              className="mt-4 px-3 py-1 bg-[#EF8B8B] text-white font-semibold rounded-md shadow-md hover:shadow-lg"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Sidebar kanan versi mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[16rem] bg-white z-50 shadow-lg transform transition-transform duration-300 lg:hidden ${
          isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center bg-gray-400 text-white">
          <span className="font-bold">Rekomendasi Teman</span>
          <button
            onClick={() => setIsRightSidebarOpen(false)}
            className="text-white text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-3.5rem)]">
          {recommendedUsers && recommendedUsers.length > 0 ? (
            recommendedUsers.map((user) => (
              <RecommendedUser key={user._id} user={user} />
            ))
          ) : (
            <p>Belum ada rekomendasi teman.</p>
          )}

          {/* Pagination untuk mobile sidebar kanan */}
          <div className="flex justify-center my-4 gap-x-1 ">
            <button
              className={`px-3 py-1 text-sm rounded-md transition-all ${
                page === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
              }`}
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              ← Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 text-sm rounded-md transition-all shadow-sm ${
                  page === index + 1
                    ? "bg-blue-700 text-white font-semibold"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`px-3 py-1 text-sm rounded-md transition-all ${
                page === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
              }`}
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next →
            </button>
          </div>
          <VerifiedUsers authUser={authUser} allUsers={allUsers} />
        </div>
      </div>

      {/* Overlay buat sidebar kanan */}
      {isRightSidebarOpen && (
        <div
          onClick={() => setIsRightSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
        />
      )}
    </div>
  );
};
export default HomePage;
