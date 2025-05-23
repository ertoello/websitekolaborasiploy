import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef, useEffect, forwardRef } from "react";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";
import { User, Lock, Eye, EyeOff, Loader } from "lucide-react";
import { Link, useNavigate} from "react-router-dom";

// Komponen Input dengan support ref dan icon
const Input = forwardRef(({ icon: Icon, type, ...props }, ref) => (
  <div className="relative">
    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
      <Icon className="h-5 w-5" />
    </span>
    <input
      {...props}
      type={type}
      ref={ref}
      className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>
));

const Modal = ({ message, onClose, type = "error" }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-sm shadow-xl">
        <h2
          className={`text-xl font-semibold mb-2 ${
            type === "error" ? "text-red-600" : "text-green-600"
          }`}
        >
          {type === "error" ? "Terjadi Kesalahan" : "Berhasil"}
        </h2>
        <p className="text-gray-700">{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#145C75] text-white px-4 py-2 rounded hover:bg-[#2B7A98]"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [modalMessage, setModalMessage] = useState(null);
  const [modalType, setModalType] = useState("error"); // 'error' or 'success'

  // Fokus otomatis ke input username
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const { mutate: loginMutation, isLoading } = useMutation({
    mutationFn: (userData) => axiosInstance.post("/auth/login", userData),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      setModalType("success");
      setModalMessage("Login berhasil! Mengarahkan ke halaman utama!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: (err) => {
      setModalType("error");
      setModalMessage(
        err.response?.data?.message || "Terjadi kesalahan saat login"
      );
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation({ username, password });
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-5 md:p-10 w-full max-w-lg border border-[#D7D7D7]">
      <h2 className="text-[#145C75] text-3xl font-bold text-center mb-4 uppercase tracking-wide">
        Masuk ke Dunia Kolaborasi
      </h2>
      <p className="text-center text-[#525252] mb-4">
        Bergabunglah dengan komunitas inovatif untuk membangun masa depan
        digital!
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Username Input */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Username
          </label>
          <Input
            icon={User}
            type="text"
            id="username"
            placeholder="Masukkan username Anda"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameRef}
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Kata Sandi
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <Lock className="h-5 w-5" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Masukkan kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </span>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <Link
            to="/forgot-password"
            className="text-sm text-[#145C75] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {error && <p className="text-red-500 font-semibold mb-2">{error}</p>}

        <button
          type="submit"
          className="w-full p-2 flex justify-center items-center rounded-lg bg-gradient-to-r from-[#3FA3CE] to-[#2B7A98] hover:from-[#2B7A98] hover:to-[#145C75] text-white font-bold text-md tracking-wide uppercase shadow-lg transition duration-300 transform hover:scale-102"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader className="size-6 animate-spin" />
          ) : (
            "Login Sekarang"
          )}
        </button>
      </form>
      {modalMessage && (
        <Modal
          message={modalMessage}
          onClose={() => setModalMessage(null)}
          type={modalType}
        />
      )}
    </div>
  );
};

export default LoginForm;
