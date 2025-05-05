import React from "react";
import { Handshake, FileText, Users, Star, PlusCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios"; // pastikan path ini sesuai dengan project-mu
import { Link } from "react-router-dom"; // pastikan ini diimpor jika pakai react-router

const MobileBottomNavbar = ({
  onLeftSidebarToggle,
  onRightSidebarToggle,
  setShowMobilePost,
}) => {
  // Ambil data user login
  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const response = await axiosInstance.get("/auth/me");
      return response.data;
    },
    initialData: null,
  });

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#3FA3CE] shadow-md border-t flex justify-between items-center px-4 py-2 lg:hidden z-40">
      {/* Kiri - Kolaborasi */}
      <button
        onClick={onLeftSidebarToggle}
        className="flex flex-col items-center text-sm text-white"
      >
        <div className="flex items-center gap-1">
          <FileText className="w-5 h-5" />
          <Handshake className="w-5 h-5" />
        </div>
        <span className="mt-1 text-xs">Kolaborasi</span>
      </button>

      {/* Tengah - Post */}
      <button
        onClick={() => setShowMobilePost(true)}
        className="flex flex-col items-center text-white"
      >
        <PlusCircle className="w-6 h-6" />
        <span className="text-xs">Posting</span>
      </button>

      {/* Kanan - Rekomendasi */}
      <button
        onClick={onRightSidebarToggle}
        className="flex flex-col items-center text-sm text-white"
      >
        <div className="flex items-center gap-1">
          <Users className="w-5 h-5" />
          <Star className="w-5 h-5" />
        </div>
        <span className="mt-1 text-xs">Teman</span>
      </button>

      {/* Profil user */}
      {authUser && (
        <Link
          to={`/profile/${authUser.username}`}
          className="flex flex-col items-center ml-3 text-white"
        >
          <img
            src={authUser.profilePicture || "/avatar.png"}
            alt={authUser.name || "User"}
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
          />
          <span className="text-xs mt-1 truncate max-w-[60px]">
            {(authUser.name || "User").split(" ")[0]}
          </span>
        </Link>
      )}
    </div>
  );
};

export default MobileBottomNavbar;
