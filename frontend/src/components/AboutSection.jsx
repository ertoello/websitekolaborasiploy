import { useState, useEffect, useRef } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const AboutSection = ({ userData, isOwnProfile, onSave }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [about, setAbout] = useState(userData.about || "");
  const [shouldShowExpand, setShouldShowExpand] = useState(false);
  const { quill, quillRef } = useQuill();
  const contentRef = useRef(null);

  // Set editor content saat mulai edit
  useEffect(() => {
    if (quill && isEditing) {
      quill.root.innerHTML = about;
    }
  }, [quill, isEditing]);

  // Deteksi apakah isi lebih dari 3 baris
  useEffect(() => {
    if (contentRef.current) {
      const el = contentRef.current;
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 24;
      const maxLines = 3;
      const threshold = lineHeight * maxLines;

      // Jika konten lebih tinggi dari 3 baris, tampilkan tombol
      setShouldShowExpand(el.scrollHeight > threshold);
    }
  }, [about]);

  const handleSave = () => {
    if (quill) {
      const htmlContent = quill.root.innerHTML;
      setAbout(htmlContent);
      onSave({ about: htmlContent });
    }
    setIsEditing(false);
  };

  return (
    <>
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Tentang Saya</h2>

        {!isExpanded ? (
          <>
            <div
              ref={contentRef}
              className="prose text-gray-700 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: about }}
            />
            {shouldShowExpand && (
              <button
                onClick={() => setIsExpanded(true)}
                className="mt-3 text-sm text-primary hover:underline transition"
              >
                🔎 Lihat informasi selengkapnya
              </button>
            )}
          </>
        ) : (
          <>
            <div
              className="prose text-gray-700"
              dangerouslySetInnerHTML={{ __html: about }}
            />
            {isOwnProfile && (
              <button
                onClick={() => setIsEditing(true)}
                className="mt-3 text-sm text-primary hover:underline transition"
              >
                ✏️ Ubah Informasi
              </button>
            )}
          </>
        )}
      </div>

      {/* Modal Editor */}
      {isEditing && (
        <div className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl p-8 relative animate-scale-in border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Edit Tentang Saya
            </h2>

            <div
              ref={quillRef}
              className="h-64 mb-6 rounded-lg overflow-hidden"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsEditing(false)}
                className="px-5 py-2 text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-[#3FA3CE] text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition"
              >
                💾 Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;
