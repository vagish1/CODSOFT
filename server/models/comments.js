import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    message : String,
    commentedBy : {
        type : mongoose.Types.ObjectId,
        ref : "Users"
    },
    commentedOn : {
        type : mongoose.Types.ObjectId,
        ref : "BlogPost"
    }
}, {collection : "Comments"})

const Comments = mongoose.model("Comments", commentSchema);
export default Comments;