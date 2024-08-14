import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import blogPostRouter from './routes/blogPostRoute.js';
import userRouter from './routes/userRoute.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json())

//routes
app.use('/blogPost', blogPostRouter);
app.use('/users', userRouter);

mongoose.connect(process.env.MONGOOSE_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    })
}).catch((error) => console.log(error))

