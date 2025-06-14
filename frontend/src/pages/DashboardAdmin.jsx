import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const DashboardAdmin = () => {
  const queryClient = useQueryClient();
  const [editingUser, setEditingUser] = useState(null);
  const [editData, setEditData] = useState({ name: "", username: "", role: "" });
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [confirmUserId, setConfirmUserId] = useState(null);
  const [activeTab, setActiveTab] = useState("daftar");
  const [subTab, setSubTab] = useState("verified");
  const [subTabManajemen, setSubTabManajemen] = useState("verified");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data: users, isLoading } = useQuery({
    queryKey: ["recommendedUsers"],
    queryFn: () => axiosInstance.get("/messages/users"),
  });

  const confirmUser = useMutation({
    mutationFn: (userId) => axiosInstance.put(`/auth/users/${userId}/confirm`),
    onSuccess: () => {
      toast.success("User confirmed successfully");
      queryClient.invalidateQueries({ queryKey: ["recommendedUsers"] });
      setConfirmUserId(null);
    },
    onError: () => toast.error("Failed to confirm user"),
  });

  const deleteUser = useMutation({
    mutationFn: (userId) => axiosInstance.delete(`/users/${userId}`),
    onSuccess: () => {
      toast.success("User deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["recommendedUsers"] });
      setDeleteUserId(null);
    },
    onError: () => toast.error("Failed to delete user"),
  });

  const updateUser = useMutation({
    mutationFn: ({ userId, newData }) => axiosInstance.put(`/users/${userId}`, newData),
    onSuccess: () => {
      toast.success("User updated successfully");
      queryClient.invalidateQueries({ queryKey: ["recommendedUsers"] });
      setEditingUser(null);
    },
    onError: () => toast.error("Failed to update user"),
  });

  const handleEdit = (user) => {
    setEditingUser(user._id);
    setEditData({ name: user.name, username: user.username, role: user.role });
  };

  const handleSave = () => {
    updateUser.mutate({ userId: editingUser, newData: editData });
  };

  if (isLoading) return <p>Loading...</p>;

  const TidakAdaData = ({ pesan }) => (
    <p className="text-center text-gray-500 font-semibold py-10">{pesan}</p>
  );

  const renderUserCard = (user) => (
    <div key={user._id} className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-center gap-2">
        <h3 className="text-lg font-bold text-center mb-2">
          {editingUser === user._id ? (
            <input type="text" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} className="border p-1" />
          ) : (user.name)}
        </h3>
        {user?.role === "admin" && <img src="/admin.png" alt="Verified" className="w-6 h-6 object-contain" />}
      </div>

      <img src={user.profilePicture || "/avatar.png"} alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-3" />

      <table className="w-full border-collapse text-sm">
        <tbody>
          <tr className="border-b"><td className="p-1 font-bold">ID</td><td className="p-1">{user._id}</td></tr>
          <tr className="border-b"><td className="p-1 font-bold">NIK</td><td className="p-1">{user.nik}</td></tr>
          <tr className="border-b"><td className="p-1 font-bold">Username</td><td className="p-1">{editingUser === user._id ? (<input type="text" value={editData.username} onChange={(e) => setEditData({ ...editData, username: e.target.value })} className="border p-1 rounded w-full" />) : (user.username)}</td></tr>
          <tr className="border-b"><td className="p-1 font-bold">Email</td><td className="p-1">{user.email}</td></tr>
          <tr className="border-b"><td className="p-1 font-bold">Verified</td><td className="p-1">{user.isVerified ? "Yes" : "No"}</td></tr>
          <tr className="border-b"><td className="p-1 font-bold">Verifikasi Akun</td><td className="p-1">{user.isApproved ? "Yes" : "No"}</td></tr>
          <tr className="border-b"><td className="p-1 font-bold">Last Login</td><td className="p-1">{new Date(user.lastLogin).toLocaleString()}</td></tr>
          <tr className="border-b"><td className="p-1 font-bold">Jumlah Koneksi</td><td className="p-1">{user.connections.length > 0 ? `${user.connections.length} Koneksi` : "Belum Ada Koneksi"}</td></tr>
          <tr className="border-b"><td className="p-1 font-bold">Role</td><td className="p-1">{editingUser === user._id ? (<select value={editData.role} onChange={(e) => setEditData({ ...editData, role: e.target.value })} className="border p-1 rounded w-full"><option value="user">User</option><option value="admin">Admin</option></select>) : (<div className="mt-2 text-left"><span className={`inline-block px-2 py-1 text-md rounded-md font-bold ${user.role === "admin" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"}`}>{user.role || "Tidak Ada Role"}</span></div>)}</td></tr>
        </tbody>
      </table>

      <div className="bg-gray-100 rounded-lg shadow-md mt-2">
        <div className="flex justify-evenly items-center gap-2 p-1 bg-white rounded-md shadow-sm">
          {user.isApproved ? (<span className="text-green-600 font-bold">✔ TERVERIFIKASI</span>) : (<><button onClick={() => setConfirmUserId(user._id)} className="px-3 py-2 bg-green-500 text-white rounded">✔ Confirm</button><button onClick={() => setDeleteUserId(user._id)} className="px-3 py-2 bg-red-500 text-white rounded">✖ Tolak</button></>)}
        </div>
        <div className="flex justify-evenly items-center gap-2 p-1 bg-white rounded-md shadow-sm mt-2">
          {editingUser === user._id ? (<button onClick={handleSave} className="px-3 py-2 bg-blue-500 text-white rounded">💾 Save</button>) : (<button onClick={() => handleEdit(user)} className="px-3 py-2 bg-yellow-500 text-white rounded">✏ Edit</button>)}
          <button onClick={() => setDeleteUserId(user._id)} className="px-3 py-2 bg-red-500 text-white rounded">🗑 Delete</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      {/* Hamburger button for mobile */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-gray-700 focus:outline-none"
          aria-label="Buka Menu"
          title="Buka Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {/* Sidebar */}
      <aside className="hidden md:block w-60 bg-gray-100 p-5 border-r shrink-0">
        <h2 className="text-lg font-bold mb-4 text-center text-blue-700">
          Menu Admin
        </h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveTab("daftar")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "daftar"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Daftar User
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("manajemen")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "manajemen"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Manajemen User
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("admin")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "admin"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Manajemen Admin
            </button>
          </li>

          <li>
            <button
              onClick={() => setActiveTab("dokumen")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "dokumen"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Dokumen Identitas
            </button>
          </li>
        </ul>
      </aside>
      {/* Mobile Sidebar Drawer */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Sidebar Drawer */}
          <div className="relative w-60 bg-white p-5 z-50 shadow-lg">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              aria-label="Tutup Menu"
              title="Tutup Menu"
            >
              ✕
            </button>

            <h2 className="text-lg font-bold mb-4 text-center text-blue-700">
              Menu Admin
            </h2>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    setActiveTab("daftar");
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "daftar"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  Daftar User
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab("manajemen");
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "manajemen"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  Manajemen User
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("admin")}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "admin"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  Manajemen Admin
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    setActiveTab("dokumen");
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "dokumen"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  Dokumen Identitas
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* Main Content */}
      <div className="flex-1 p-5 overflow-auto">
        {activeTab === "daftar" && (
          <>
            <div className="mb-6 text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                Total Warga Terverifikasi:{" "}
                {users?.data?.filter(
                  (user) => user.role === "user" && user.isApproved
                ).length || 0}
              </h3>
            </div>

            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={() => setSubTab("verified")}
                className={`px-4 py-2 rounded ${
                  subTab === "verified"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                Terverifikasi
              </button>
              <button
                onClick={() => setSubTab("unverified")}
                className={`px-4 py-2 rounded ${
                  subTab === "unverified"
                    ? "bg-red-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                Belum Terverifikasi
              </button>
            </div>

            {subTab === "verified" ? (
              <>
                <h3 className="text-lg font-semibold text-green-600 mb-2 text-center">
                  Pengguna Terverifikasi
                </h3>
                {users?.data?.filter(
                  (user) => user.role === "user" && user.isApproved
                ).length === 0 ? (
                  <TidakAdaData pesan="Tidak ada pengguna terverifikasi." />
                ) : (
                  <div className="overflow-x-auto bg-white shadow-md rounded-lg mb-8">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                      <thead className="bg-green-100">
                        <tr>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Foto
                          </th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Nama
                          </th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Username
                          </th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Email
                          </th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Role
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {users.data
                          .filter(
                            (user) => user.role === "user" && user.isApproved
                          )
                          .map((user) => (
                            <tr key={user._id}>
                              <td className="px-4 py-2">
                                <img
                                  src={user.profilePicture || "/avatar.png"}
                                  alt="Profile"
                                  className="w-10 h-10 rounded-full"
                                />
                              </td>
                              <td className="px-4 py-2">{user.name}</td>
                              <td className="px-4 py-2">{user.username}</td>
                              <td className="px-4 py-2">{user.email}</td>
                              <td className="px-4 py-2 capitalize">
                                <span className="inline-block px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-800">
                                  {user.role}
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-red-600 mb-2 text-center">
                  Pengguna Belum Terverifikasi
                </h3>
                {users?.data?.filter(
                  (user) => user.role === "user" && !user.isApproved
                ).length === 0 ? (
                  <TidakAdaData pesan="Tidak ada pengguna belum terverifikasi." />
                ) : (
                  <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                      <thead className="bg-red-100">
                        <tr>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Foto
                          </th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Nama
                          </th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Username
                          </th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Email
                          </th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Role
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {users.data
                          .filter(
                            (user) => user.role === "user" && !user.isApproved
                          )
                          .map((user) => (
                            <tr key={user._id}>
                              <td className="px-4 py-2">
                                <img
                                  src={user.profilePicture || "/avatar.png"}
                                  alt="Profile"
                                  className="w-10 h-10 rounded-full"
                                />
                              </td>
                              <td className="px-4 py-2">{user.name}</td>
                              <td className="px-4 py-2">{user.username}</td>
                              <td className="px-4 py-2">{user.email}</td>
                              <td className="px-4 py-2 capitalize">
                                <span className="inline-block px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-800">
                                  {user.role}
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {activeTab === "dokumen" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users?.data?.length === 0 ? (
              <TidakAdaData pesan="Tidak ada pengguna." />
            ) : (
              users.data.map((user) => (
                <div key={user._id} className="bg-white shadow rounded-lg p-4">
                  <h3 className="text-lg font-bold text-center mb-2">
                    {user.name}
                  </h3>
                  {user.fotoKTP ? (
                    <img
                      src={user.fotoKTP}
                      alt="KTP"
                      className="w-full h-auto object-contain rounded"
                    />
                  ) : (
                    <p className="text-center text-gray-500">
                      Belum upload KTP
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {(activeTab === "admin" || activeTab === "manajemen") && (
          <>
            {/* Navigasi hanya untuk tab manajemen */}
            {activeTab === "manajemen" && (
              <div className="flex justify-center gap-4 mb-4">
                <button
                  onClick={() => setSubTabManajemen("verified")}
                  className={`px-4 py-2 rounded ${
                    subTabManajemen === "verified"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Terverifikasi
                </button>
                <button
                  onClick={() => setSubTabManajemen("unverified")}
                  className={`px-4 py-2 rounded ${
                    subTabManajemen === "unverified"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Belum Terverifikasi
                </button>
              </div>
            )}

            {/* Data filter */}
            {(() => {
              const isAdmin = activeTab === "admin";
              const filteredUsers =
                users?.data?.filter((user) => {
                  if (isAdmin) {
                    return user.role === "admin"; // tidak pakai subTabManajemen
                  } else {
                    return (
                      user.role === "user" &&
                      (subTabManajemen === "verified"
                        ? user.isApproved
                        : !user.isApproved)
                    );
                  }
                }) || [];

              return filteredUsers.length === 0 ? (
                <TidakAdaData
                  pesan={`Tidak ada ${isAdmin ? "admin" : "pengguna"}${
                    !isAdmin
                      ? ` yang ${
                          subTabManajemen === "verified"
                            ? "terverifikasi"
                            : "belum terverifikasi"
                        }`
                      : ""
                  }.`}
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredUsers.map((user) => renderUserCard(user))}
                </div>
              );
            })()}
          </>
        )}

        {!["daftar", "dokumen", "admin", "manajemen"].includes(activeTab) && (
          <TidakAdaData pesan="Tidak ada tab aktif." />
        )}

        {(confirmUserId || deleteUserId) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
              <h3 className="text-lg font-semibold mb-4">
                {confirmUserId ? "Konfirmasi Akun" : "Konfirmasi Hapus"}
              </h3>
              <p className="text-gray-700 mb-6">
                {confirmUserId
                  ? "Apakah Anda yakin ingin mengonfirmasi user ini?"
                  : "Apakah Anda yakin ingin menghapus user ini?"}
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => {
                    setConfirmUserId(null);
                    setDeleteUserId(null);
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() =>
                    confirmUserId
                      ? confirmUser.mutate(confirmUserId)
                      : deleteUser.mutate(deleteUserId)
                  }
                  className={`px-4 py-2 ${
                    confirmUserId ? "bg-green-500" : "bg-red-500"
                  } text-white rounded hover:${
                    confirmUserId ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {confirmUserId ? "Confirm" : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Modal Konfirmasi */}
      {(confirmUserId || deleteUserId) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h3 className="text-lg font-semibold mb-4">
              {confirmUserId ? "Konfirmasi Akun" : "Konfirmasi Hapus"}
            </h3>
            <p className="text-gray-700 mb-6">
              {confirmUserId
                ? "Apakah Anda yakin ingin mengonfirmasi user ini?"
                : "Apakah Anda yakin ingin menghapus user ini?"}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  setConfirmUserId(null);
                  setDeleteUserId(null);
                }}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  confirmUserId
                    ? confirmUser.mutate(confirmUserId)
                    : deleteUser.mutate(deleteUserId)
                }
                className={`px-4 py-2 ${
                  confirmUserId ? "bg-green-500" : "bg-red-500"
                } text-white rounded hover:${
                  confirmUserId ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {confirmUserId ? "Confirm" : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardAdmin;
