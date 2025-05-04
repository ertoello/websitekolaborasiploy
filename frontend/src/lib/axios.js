import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api/v1" // atau ini kalau lokal
      : "https://websitekolaborasiploy-production.up.railway.app/api/v1",
  withCredentials: true,
});

