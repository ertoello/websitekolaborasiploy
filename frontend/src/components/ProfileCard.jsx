import { useState } from "react";
import { Link } from "react-router-dom";
import OnlineStatus from "./OnlineStatus";
import { axiosInstance } from "../lib/axios";

export default function ProfileCard({ user, sidebarOpen }) {
  const [connectionList, setConnectionList] = useState([]);
  const [showConnectionsList, setShowConnectionsList] = useState(false);

  const handleConnectionsClick = async (username) => {
    if (showConnectionsList) {
      // Jika sudah ditampilkan, klik akan menyembunyikan
      setShowConnectionsList(false);
      return;
    }

    try {
      const res = await axiosInstance.get(`/connections/user/${username}`);
      setConnectionList(res.data);
      setShowConnectionsList(true);
    } catch (err) {
      console.error("Gagal mengambil koneksi:", err);
    }
  };

  return (
    <div className="p-4 text-center relative border rounded-lg shadow">
      {/* Banner */}
      <div
        className="h-16 rounded-t-lg bg-cover bg-center"
        style={{ backgroundImage: `url("${user.bannerImg || "/banner.png"}")` }}
      />

      {/* Foto Profil & Online Status */}
      <Link to={`/profile/${user.username}`} className="relative block">
        <img
          src={user.profilePicture || "/avatar.png"}
          alt={user.name}
          className="w-20 h-20 rounded-full mx-auto mt-[-40px] border-4 border-white shadow-lg transition-transform transform hover:scale-105"
        />
        <OnlineStatus />
      </Link>

      {/* Detail dan koneksi */}
      {sidebarOpen && (
        <>
          <div className="flex items-center justify-center gap-2 mt-2">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            {user?.role === "admin" && (
              <img
                src="/admin.png"
                alt="Admin Badge"
                className="w-7 h-7 object-contain"
                title="Admin"
              />
            )}
          </div>
          <p className="text-info">{user.headline}</p>
          <p
            className="text-white text-sm font-semibold cursor-pointer hover:underline mt-1"
            onClick={() => handleConnectionsClick(user.username)}
          >
            {user.connections.length > 0 ? (
              <span>{user.connections.length} Koneksi</span>
            ) : (
              <span className="text-[#CCCCCC]">Belum Ada Koneksi</span>
            )}
          </p>

          {/* Daftar Koneksi */}
          {showConnectionsList && (
            <div className="text-left">
              {/* <h3 className="text-sm font-semibold mb-2">Daftar Koneksi:</h3> */}
              <div className="max-h-60 overflow-y-auto border p-1 rounded">
                {connectionList.length > 0 ? (
                  connectionList.map((conn) => (
                    <Link
                      to={`/profile/${conn.username}`}
                      className="flex items-center gap-3 mb-2 hover:bg-gray-100 p-2 rounded transition"
                      key={conn._id}
                    >
                      <img
                        src={conn.profilePicture || "/avatar.png"}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm">{conn.name}</p>
                          {conn?.role === "admin" && (
                            <img
                              src="/admin.png"
                              alt="Admin Badge"
                              className="w-3 h-3 object-contain"
                              title="Admin"
                            />
                          )}
                        </div>

                        <p className="text-xs text-gray-500">{conn.headline}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Tidak ada koneksi.</p>
                )}
              </div>
              <button
                className="mt-1 px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                onClick={() => setShowConnectionsList(false)}
              >
                Tutup Daftar
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
