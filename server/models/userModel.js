import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
}, {collection: "Users"})

const Users = mongoose.model('Users', userSchema);
export default Users;