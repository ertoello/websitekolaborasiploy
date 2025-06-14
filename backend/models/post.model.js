import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String },
    image: { type: String },
    category: {
      type: String,
      enum: ["kolaborasi", "penting", "keuangan"],
      default: "kolaborasi", // ← ini bagian default-nya
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
      new mongoose.Schema(
        {
          content: { type: String },
          user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          createdAt: { type: Date, default: Date.now },
        },
        { _id: true } // ← Ini juga cukup
      ),
    ],    
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
