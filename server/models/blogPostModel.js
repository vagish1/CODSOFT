import mongoose from "mongoose";

const blogPostSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    attachments: [String],
    views: {
      type: Number,
      default: 0,
    },
    noOfLikes: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
    },
    comments: [
      {
        comment: {
          type: String,
        },
      },
    ],
  },
  { collection: "BlogPost" }
);

const BlogPost = mongoose.model("BlogPost", blogPostSchema);
export default BlogPost;
