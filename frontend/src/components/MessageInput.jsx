import { useRef, useState, useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import "../index.css";

const MessageInput = () => {
  const [editorText, setEditorText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const quillRef = useRef(null); // Refs to access the editor instance
  const { sendMessage } = useChatStore();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      [{ font: [] }, { size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "list",
    "blockquote",
    "code-block",
    "link",
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file?.type?.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const quillInstance = quillRef.current?.getEditor();
    if (!quillInstance) return;

    const htmlContent = quillInstance.root.innerHTML;
    const sanitizedText = DOMPurify.sanitize(htmlContent);
    const plainText = sanitizedText.replace(/<(.|\n)*?>/g, "").trim();

    if (!plainText && !imagePreview) return;

    try {
      await sendMessage({
        text: sanitizedText,
        image: imagePreview,
      });

      // Clear editor
      quillInstance.setText("");
      setEditorText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  useEffect(() => {
    const tooltips = {
      bold: "Tebal: Membuat teks jadi tebal",
      italic: "Miring: Membuat teks miring",
      underline: "Garis bawah: Memberi garis bawah",
      strike: "Coret: Menandai teks dengan coretan",
      link: "Tautan: Menyisipkan hyperlink",
      "code-block": "Blok kode: Format teks seperti kode",
      blockquote: "Kutipan: Menyorot kutipan",
      clean: "Bersihkan: Menghapus semua format teks",
      list: "Nomor: Buat daftar bernomor",
      bullet: "Poin: Buat daftar dengan poin",
      "indent-1": "Geser kiri: Mengurangi indentasi",
      "indent+1": "Geser kanan: Menambah indentasi",
      align: "Rata: Mengatur perataan teks",
      background: "Warna latar: Ganti warna latar belakang teks",
      color: "Warna teks: Ganti warna teks",
      script: "Sub/Superscript: Format pangkat bawah/atas",
      font: "Font: Pilih jenis huruf",
      size: "Ukuran: Atur besar kecil huruf",
      header: "Judul: Atur level heading",
      direction: "Arah tulisan: Kanan ke kiri / kiri ke kanan",
    };

    const buttons = document.querySelectorAll(
      ".ql-toolbar button, .ql-toolbar select"
    );
    buttons.forEach((btn) => {
      const className = Array.from(btn.classList).find((cls) =>
        cls.startsWith("ql-")
      );
      if (className) {
        const key = className.replace("ql-", "");
        if (!btn.hasAttribute("aria-label") && tooltips[key]) {
          btn.setAttribute("aria-label", tooltips[key]);
        }
      }
    });

    const quillInstance = quillRef.current?.getEditor();
    if (!quillInstance) return;

    const updateText = () => {
      const text = quillInstance.getText().trim();
      setEditorText(text);
    };

    quillInstance.on("text-change", updateText);

    return () => {
      quillInstance.off("text-change", updateText);
    };
  }, []);

  return (
    <div className="w-full flex justify-center p-2 shadow-lg">
      <form
        onSubmit={handleSendMessage}
        className="flex flex-col gap-3 w-full max-w-[80vw] md:max-w-[65vw]"
      >
        <ReactQuill
          ref={quillRef}
          value={editorText}
          onChange={setEditorText}
          modules={modules}
          formats={formats}
          placeholder="Tulis pesan..."
          className="bg-white rounded-md custom-editor"
        />

        {/* IMAGE PREVIEW */}
        {imagePreview && (
          <div className="flex items-center gap-2">
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-lg border"
              />
              <button
                onClick={removeImage}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center"
                type="button"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            className={`btn btn-sm btn-outline ${
              imagePreview ? "text-emerald-500" : "text-zinc-400"
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={20} className="mr-1" />
            Upload Gambar
          </button>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="submit"
            className="btn btn-primary btn-sm"
            disabled={editorText.length === 0 && !imagePreview}
          >
            <Send size={20} className="mr-1" />
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
