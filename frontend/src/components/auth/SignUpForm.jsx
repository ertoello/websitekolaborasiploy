import { useState, useRef, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { toast } from "react-hot-toast";
import { Loader, Lock, Mail, User, Eye, EyeOff, IdCard } from "lucide-react";
import PasswordStrengthMeter from "../PasswordStrengthMeter";
import { useNavigate } from "react-router-dom";

// Letakkan DI LUAR SignUpForm
const LabeledInput = ({
  label,
  icon: Icon,
  type,
  value,
  onChange,
  required,
  inputRef,
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
        <Icon className="h-5 w-5" />
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        ref={inputRef}
        className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nik, setNik] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setIsModalOpen(true);
  };


  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const { mutate: signUpMutation, isLoading } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosInstance.post("/auth/signup", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      navigate("/messages");
      showModal(
        "Berhasil",
      );
    },
    onError: (err) => {
      showModal("Gagal", err?.response?.data?.message || "Terjadi kesalahan.");
    },
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password harus memiliki minimal 6 karakter.");
      return;
    }

    setError(null); // clear error jika valid
    try {
      signUpMutation({ name, username, email, password, nik });
      // navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-4">
      <LabeledInput
        label="Nama Lengkap"
        icon={User}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        inputRef={nameRef}
      />

      <LabeledInput
        label="NIK Kamu"
        icon={IdCard}
        type="text"
        value={nik}
        onChange={(e) => setNik(e.target.value)}
        required
      />

      <LabeledInput
        label="Username"
        icon={User}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <LabeledInput
        label="Email"
        icon={Mail}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* Password dengan toggle lihat */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-700">
          Kata Sandi (6+ karakter)
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <Lock className="h-5 w-5" />
          </span>
          <input
            type={showPassword ? "text" : "password"}
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

      {error && <p className="text-red-500 font-semibold mt-1">{error}</p>}

      <PasswordStrengthMeter password={password} />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full p-2 rounded-lg bg-gradient-to-r from-[#3FA3CE] to-[#2B7A98] hover:from-[#2B7A98] hover:to-[#145C75] text-white font-bold text-md tracking-wide uppercase shadow-lg transition duration-300 transform hover:scale-102"
      >
        {isLoading ? (
          <Loader className="size-5 animate-spin" />
        ) : (
          "Agree & Join"
        )}
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      >
        <p>{modalMessage}</p>
      </Modal>
    </form>
  );
};

export default SignUpForm;
