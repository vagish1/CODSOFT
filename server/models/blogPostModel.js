import mongoose from "mongoose";

const blogPostSchema = mongoose.Schema({
    title : String,
    description : String,
    creator : {
        type : mongoose.Types.ObjectId,
        ref : "Users"
    },
    selectedFile: String,
    views : {
        type : Number,
        default : 0
    }
}, {collection: "BlogPost"})

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
export default BlogPost;