import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    postTitle: {
      type: String,
      required: [true, "Please enter the post title"],
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author id required."],
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
