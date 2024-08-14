import mongoose from "mongoose";
import BlogPost from "../models/blogPostModel.js";


export const getBlogPosts = async (req, res) => {
    try {
        const blogPost = await BlogPost.find()
        res.status(200).json({message: "Successfully get All Posts.", blogPost})
    } catch (error) {
        res.status(400).json({message : error})
    }
}

export const createBlogPost = async (req, res) => {
    const data = req.body;
    const newBlogPost = new BlogPost(data);
    try {
        await newBlogPost.save();
        res.status(209).json({message: "Successfully created BlogPost.", newBlogPost})
    } catch (error) {
        res.status(409).json({message: error})
    }
}

export const updateBlogPost = async (req, res) => {
    const {id} = req.params;
    const {title, description, selectedFile} = req.body;
    try {
       if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: "Invalid Id"});

       const updatedPost = {title, description, selectedFile, _id: id};

       await BlogPost.findOneAndUpdate({_id: id}, {$set: updatedPost}, {new: true});

       res.json({message: "Successfully updated this post", updatedPost})
    } catch (error) {
        res.status(500).json({message: "Server error", error})
    }
}

export const deleteBlogPost = async (req, res) => {
    const {id} = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: "Invalid Id"});

        const deletedPost = await BlogPost.findOneAndDelete({_id: id});
        res.json({message: "Successfully deleted post", deletedPost})
    } catch (error) {
        
    }
}