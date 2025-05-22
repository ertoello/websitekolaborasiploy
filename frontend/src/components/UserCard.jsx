import { Link } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../lib/axios"; // pastikan ini benar

function UserCard({ user, isConnection }) {
  const [showConnectionsList, setShowConnectionsList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionList, setConnectionList] = useState([]);

  const handleConnectionsClick = async (username) => {
    if (showConnectionsList) {
      setShowConnectionsList(false);
      return;
    }

    setIsLoading(true);
    try {
      const res = await axiosInstance.get(`/connections/user/${username}`);
      setConnectionList(res.data);
      setShowConnectionsList(true);
    } catch (err) {
      console.error("Gagal mengambil koneksi:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-300 rounded-lg shadow-md p-4 flex flex-col items-center transition-all hover:shadow-md">
      <Link
        to={`/profile/${user.username}`}
        className="flex flex-col items-center"
      >
        <img
          src={user.profilePicture || "/avatar.png"}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <div className="flex justify-center items-center gap-2">
          <h3 className="font-semibold text-lg text-center">{user.name}</h3>
          {user?.role === "admin" && (
            <img
              src="/admin.png"
              alt="Verified"
              className="w-6 h-6 object-contain"
            />
          )}
        </div>
      </Link>

      <p className="text-gray-600 text-center">{user.headline}</p>

      {/* Tombol koneksi */}
      <p
        className="text-[#3FA3CE] text-sm font-semibold cursor-pointer hover:underline mt-1"
        onClick={() => handleConnectionsClick(user.username)}
      >
        {user.connections?.length > 0 ? (
          <span>{user.connections.length} Koneksi</span>
        ) : (
          <span className="text-[#CCCCCC]">Belum Ada Koneksi</span>
        )}
      </p>

      {/* Daftar koneksi */}
      {showConnectionsList && (
        <div className="mt-0 text-left w-full">
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
                    alt={conn.name}
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

      <button className="mt-4 bg-[#3FA3CE] text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors w-full">
        {isConnection ? "Connected" : "Connect"}
      </button>
    </div>
  );
}

export default UserCard;
