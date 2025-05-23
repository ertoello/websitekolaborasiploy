import { useEffect } from "react";

const Modalnotif = ({ isOpen, title, message, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
      <div className="animate-fadeInUp bg-gradient-to-br from-white via-gray-100 to-white shadow-xl rounded-xl p-6 max-w-md w-full border border-blue-200">
        <h2 className="text-xl font-bold text-[#2B7A98] mb-2">{title}</h2>
        <p className="text-gray-700">{message}</p>
        <div className="mt-3 h-1 rounded-full bg-blue-100 overflow-hidden">
          <div className="h-full bg-[#3FA3CE] animate-loadingBar" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out;
        }

        @keyframes loadingBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-loadingBar {
          animation: loadingBar ${duration}ms linear forwards;
        }
      `}</style>
    </div>
  );
};

export default Modalnotif;
