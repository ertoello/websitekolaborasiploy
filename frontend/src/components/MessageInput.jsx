import { useRef, useState, useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X, Edit3 } from "lucide-react";
import toast from "react-hot-toast";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import "../index.css";

const MessageInput = () => {
  const [editorText, setEditorText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [useEditor, setUseEditor] = useState(false);
  const [manualText, setManualText] = useState("");
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();
  const textareaRef = useRef(null);

  const autoResizeTextarea = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 200) + "px";
    }
  };

  useEffect(() => {
    autoResizeTextarea(); // saat komponen mount atau teks sudah ada
  }, [manualText]);


  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }, { size: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block"],
          ["link"],
          ["clean"],
        ],
      },
      clipboard: { matchVisual: false },
    },
    formats: [
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
    ],
    theme: "snow",
    placeholder: "Tulis pesan dengan styling...",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file?.type?.startsWith("image/")) {
      toast.error("Harap pilih file gambar");
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

    let textToSend = "";

    if (useEditor && quill) {
      const htmlContent = quill.root.innerHTML;
      const sanitized = DOMPurify.sanitize(htmlContent);
      const plain = sanitized.replace(/<(.|\n)*?>/g, "").trim();
      if (!plain && !imagePreview) return;
      textToSend = sanitized;
    } else {
      if (!manualText.trim() && !imagePreview) return;
      textToSend = DOMPurify.sanitize(manualText.trim());
    }

    try {
      await sendMessage({
        text: textToSend,
        image: imagePreview,
      });

      // Clear input
      if (useEditor && quill) quill.setText("");
      setManualText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Gagal mengirim pesan:", error);
    }
  };

  useEffect(() => {
    if (!quill || !useEditor) return;

    const updateText = () => {
      const text = quill.getText().trim();
      setEditorText(text);
    };

    quill.on("text-change", updateText);
    return () => {
      quill.off("text-change", updateText);
    };
  }, [quill, useEditor]);

  return (
    <div className="w-full flex justify-center p-2">
      <form
        onSubmit={handleSendMessage}
        className="flex flex-col gap-3 w-full max-w-[80vw] md:max-w-[65vw]"
      >
        {/* TOGGLE BUTTON - Hanya tampil di layar md ke atas */}
        <div className="hidden md:flex justify-end">
          <button
            type="button"
            onClick={() => setUseEditor(!useEditor)}
            className={`btn btn-sm ${useEditor ? "btn-error" : "btn-outline"}`}
          >
            <Edit3 size={18} className="mr-1" />
            {useEditor ? "Matikan Tools Editor" : "Tambahkan Tools Editor"}
          </button>
        </div>

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

        {/* EDITOR OR PLAIN TEXTAREA */}
        {useEditor ? (
          <div
            ref={quillRef}
            className="bg-white rounded-md md:max-h-[200px] max-h-[100px] overflow-y-auto border border-gray-300"
          />
        ) : (
          <textarea
            ref={textareaRef}
            className="textarea textarea-bordered min-h-0 max-h-[150px] md:max-h-[200px] overflow-y-auto resize-none"
            placeholder="Tulis pesan..."
            value={manualText}
            onChange={(e) => {
              setManualText(e.target.value);
              autoResizeTextarea();
            }}
          />
        )}

        {/* ACTION BUTTONS */}
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
            disabled={!editorText.trim() && !manualText.trim() && !imagePreview}
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
