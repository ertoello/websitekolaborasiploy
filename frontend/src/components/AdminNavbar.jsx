import React from "react";

const AdminNavbar = ({ currentTab, setCurrentTab }) => {
  const tabs = ["Daftar User", "Manajemen User", "Dokumen Identitas"];

  return (
    <div className="flex justify-center gap-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentTab(tab)}
          className={`px-4 py-2 rounded font-semibold transition ${
            currentTab === tab
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default AdminNavbar;
