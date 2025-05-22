import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import ProfileHeader from "../components/ProfileHeader";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillsSection";
import UserPosts from "../components/UserPosts";
import toast from "react-hot-toast";
import { Users } from "lucide-react";


const ProfilePage = () => {
  const { username } = useParams();
  const queryClient = useQueryClient();
  const [activeSection, setActiveSection] = useState(null);

  // Get authenticated user
  const {
    data: authUser,
    isLoading: isAuthLoading,
    isError: isAuthError,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const response = await axiosInstance.get("/auth/me");
      return response.data;
    },
  });

  // Get profile of user by username
  const {
    data: profileUser,
    isLoading: isProfileLoading,
    isError: isProfileError,
  } = useQuery({
    queryKey: ["userProfile", username],
    queryFn: async () => {
      const response = await axiosInstance.get(`/users/${username}`);
      return response.data;
    },
  });

  // Get user posts
  const {
    data: userPosts,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useQuery({
    queryKey: ["userPosts", username],
    queryFn: async () => {
      const response = await axiosInstance.get(`/posts/user/${username}`);
      return response.data;
    },
  });

  // Update profile
  const { mutate: updateProfile } = useMutation({
    mutationFn: async (updatedData) => {
      await axiosInstance.put("/users/profile", updatedData);
    },
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries(["userProfile", username]);
    },
  });

  const isOwnProfile = authUser?.username === profileUser?.username;
  const displayedUser = isOwnProfile ? authUser : profileUser;

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  if (isAuthLoading || isProfileLoading) {
    return <p className="text-center text-gray-500">Loading profile...</p>;
  }

  if (isAuthError || isProfileError || !authUser || !profileUser) {
    return <p className="text-center text-red-500">Failed to load profile.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto md:p-2 p-0">
      {/* Header */}
      <ProfileHeader
        userData={displayedUser}
        isOwnProfile={isOwnProfile}
        onSave={updateProfile}
      />

      {/* Mobile View: Toggle Buttons */}
      <div className="block md:hidden space-y-2 my-4">
        {["experience", "education", "skills"].map((section) => (
          <div key={section}>
            <button
              onClick={() => toggleSection(section)}
              className={`w-full p-2 rounded font-semibold ${
                activeSection === section ? "bg-[#78C1E4]" : "bg-[#3FA3CE]"
              } text-white transition duration-200`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>

            {activeSection === section && (
              <div className="mt-2 bg-white p-4 rounded shadow">
                {section === "experience" && (
                  <ExperienceSection
                    userData={displayedUser}
                    isOwnProfile={isOwnProfile}
                    onSave={updateProfile}
                  />
                )}
                {section === "education" && (
                  <EducationSection
                    userData={displayedUser}
                    isOwnProfile={isOwnProfile}
                    onSave={updateProfile}
                  />
                )}
                {section === "skills" && (
                  <SkillsSection
                    userData={displayedUser}
                    isOwnProfile={isOwnProfile}
                    onSave={updateProfile}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View: Grid Layout */}
      <div className="grid grid-cols-12 gap-4 mt-6">
        {/* Main Content (About + Posts) */}
        <div className="col-span-12 md:col-span-8 p-0 md:p-2 space-y-6">
          {/* About Section di tengah */}
          <AboutSection
            userData={displayedUser}
            isOwnProfile={isOwnProfile}
            onSave={updateProfile}
          />

          {/* Judul Postingan */}
          {/* <h2 className="md:text-2xl text-xl font-bold text-center text-gray-800">
            Postingan {profileUser?.name || profileUser?.username}
          </h2> */}

          {/* Loading & Error State */}
          {isPostsLoading && (
            <div className="text-center text-blue-500 font-medium animate-pulse">
              Memuat postingan...
            </div>
          )}
          {isPostsError && (
            <div className="text-center text-red-500 font-semibold">
              Gagal memuat postingan. Silakan coba lagi nanti.
            </div>
          )}

          {/* Postingan */}
          {!userPosts || userPosts.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-6 text-center mt-4">
              <div className="mb-4">
                <Users size={48} className="mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Belum ada postingan
              </h3>
              <p className="text-gray-500">
                Pengguna ini belum membagikan apapun.
              </p>
            </div>
          ) : (
            userPosts.map((post) => <UserPosts key={post._id} post={post} />)
          )}
        </div>

        {/* Sidebar - Other Sections */}
        <div className="hidden md:block col-span-4 p-4 rounded shadow space-y-6">
          <ExperienceSection
            userData={displayedUser}
            isOwnProfile={isOwnProfile}
            onSave={updateProfile}
          />
          <EducationSection
            userData={displayedUser}
            isOwnProfile={isOwnProfile}
            onSave={updateProfile}
          />
          <SkillsSection
            userData={displayedUser}
            isOwnProfile={isOwnProfile}
            onSave={updateProfile}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
