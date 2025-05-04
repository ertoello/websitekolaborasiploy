import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const SocketContext = createContext(null);

export const SocketProvider = ({ children, userId }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!userId) return;

    console.log("🔗 Connecting socket with userId:", userId);
    const newSocket = io(BASE_URL, {
      transports: ["websocket"],
      query: { userId },
    });

    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("✅ Socket connected!");
    });

    return () => {
      console.log("❌ Disconnecting socket...");
      newSocket.disconnect();
    };
  }, [userId]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);