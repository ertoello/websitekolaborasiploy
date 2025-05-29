import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div
              className="w-20 h-20 rounded-full bg-[#3FA3CE] flex items-center
             justify-center animate-pulse shadow-lg"
            >
              <MessageSquare className="w-10 h-10 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-xl md:text-4xl font-extrabold text-[#3FA3CE]">
          Media Komunikasi Interaktif Desa
        </h2>

        {/* Deskripsi */}
        <p className="text-gray-700 text-lg">
          Sambungkan diri Anda dengan warga desa melalui platform komunikasi
          modern yang interaktif, cepat, dan mudah digunakan. Mulailah
          percakapan dari sidebar untuk menjalin hubungan lebih erat!
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
