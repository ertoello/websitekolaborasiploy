import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef, useEffect, forwardRef } from "react";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";
import { User, Lock, Eye, EyeOff, Loader } from "lucide-react";
import { Link } from "react-router-dom";

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

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const queryClient = useQueryClient();

  // Fokus otomatis ke input username
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const { mutate: loginMutation, isLoading } = useMutation({
    mutationFn: (userData) => axiosInstance.post("/auth/login", userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
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
          className="w-full p-2 rounded-lg bg-gradient-to-r from-[#3FA3CE] to-[#2B7A98] hover:from-[#2B7A98] hover:to-[#145C75] text-white font-bold text-md tracking-wide uppercase shadow-lg transition duration-300 transform hover:scale-102"
        >
          {isLoading ? (
            <Loader className="size-6 animate-spin" />
          ) : (
            "Login Sekarang"
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
