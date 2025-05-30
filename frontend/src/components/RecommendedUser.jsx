import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Check, Clock, UserCheck, UserPlus, X } from "lucide-react";

const RecommendedUser = ({ user }) => {
  const queryClient = useQueryClient();

  // Fetch connection status
  const {
    data: connectionStatus,
    isLoading,
    refetch: refetchConnectionStatus,
  } = useQuery({
    queryKey: ["connectionStatus", user._id],
    queryFn: () => axiosInstance.get(`/connections/status/${user._id}`),
  });

  // Send connection request
  const { mutate: sendConnectionRequest } = useMutation({
    mutationFn: (userId) =>
      axiosInstance.post(`/connections/request/${userId}`),
    onSuccess: () => {
      toast.success("Connection request sent successfully");
      queryClient.invalidateQueries({
        queryKey: ["connectionStatus", user._id],
      });
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || "An error occurred");
    },
  });

  // Accept connection request
  const { mutate: acceptRequest } = useMutation({
    mutationFn: (requestId) =>
      axiosInstance.put(`/connections/accept/${requestId}`),
    onSuccess: () => {
      toast.success("Connection request accepted");
      queryClient.invalidateQueries({
        queryKey: ["connectionStatus", user._id],
      });
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || "An error occurred");
    },
  });

  // Reject connection request
  const { mutate: rejectRequest } = useMutation({
    mutationFn: (requestId) =>
      axiosInstance.put(`/connections/reject/${requestId}`),
    onSuccess: () => {
      toast.success("Connection request rejected");
      queryClient.invalidateQueries({
        queryKey: ["connectionStatus", user._id],
      });
    },
    onError: (error) => {
      toast.error(error.response?.data?.error || "An error occurred");
    },
  });

  // Cancel sent connection request
  const { mutate: cancelRequest } = useMutation({
    mutationFn: (userId) =>
      axiosInstance.delete(`/connections/cancel-request/${userId}`),
    onSuccess: () => {
      toast.success("Connection request canceled");
      refetchConnectionStatus();
      queryClient.invalidateQueries({ queryKey: ["connectionRequests"] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });

  // Handle connect click
  const handleConnect = () => {
    if (connectionStatus?.data?.status === "not_connected") {
      sendConnectionRequest(user._id);
    }
  };

  // Render button UI based on status
  const renderButton = () => {
    if (isLoading) {
      return (
        <button
          className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-500"
          disabled
        >
          Loading...
        </button>
      );
    }

    switch (connectionStatus?.data?.status) {
      case "pending":
        return (
          <button
            onClick={() => cancelRequest(user._id)}
            className="px-2 py-1 rounded-full text-sm bg-yellow-500 text-white flex items-center"
            title="Click to cancel request"
          >
            <Clock size={16} className="mr-1" />
            Pending
          </button>
        );
      case "received":
        return (
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => acceptRequest(connectionStatus.data.requestId)}
              className="rounded-full p-1 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white"
              title="Accept Request"
            >
              <Check size={16} />
            </button>
            <button
              onClick={() => rejectRequest(connectionStatus.data.requestId)}
              className="rounded-full p-1 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white"
              title="Reject Request"
            >
              <X size={16} />
            </button>
          </div>
        );
      case "connected":
        return (
          <button
            className="px-2 py-1 rounded-full text-sm bg-green-500 text-white flex items-center"
            disabled
          >
            <UserCheck size={16} className="mr-1" />
            Connected
          </button>
        );
      default:
        return (
          <button
            onClick={handleConnect}
            className="px-2 py-1 rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 flex items-center"
          >
            <UserPlus size={16} className="mr-1" />
            Connect
          </button>
        );
    }
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-4 shadow-md md:shadow-none p-2 md:p-0 rounded-lg overflow-x-auto">
      <Link
        to={`/profile/${user.username}`}
        className="flex items-center flex-grow min-w-0"
      >
        <img
          src={user.profilePicture || "/avatar.png"}
          alt={user.name}
          className="w-12 h-12 rounded-full mr-1"
        />
        <div className="truncate">
          <div className="flex justify-center items-center gap-2">
            <h3 className="font-semibold text-sm truncate">{user.name}</h3>
            {user?.role === "admin" && (
              <img
                src="/admin.png"
                alt="Admin Badge"
                className="w-5 h-5 object-contain"
                title="Admin"
              />
            )}
          </div>
          <p className="text-xs text-info truncate">{user.headline}</p>
        </div>
      </Link>

      <div className="w-full md:w-auto mt-2 md:mt-0 flex justify-center md:justify-end shrink-0">
        {renderButton()}
      </div>
    </div>
  );
};

export default RecommendedUser;
