import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
// import userController from './controller/user.controller.js';
import loginModel from './model/user.js';

async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1/Users')
}
connectDB();

const server = express();
const port = 3001;

//create
server.use(express.json())
server.post("/user/create", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("Email anh Password in successfully")
        }

        const currentUser = await loginModel.findOne({ email })
        if (currentUser) {
            throw new Error("Email in successfully")
        }
        const newUser = await loginModel.create({ email, password });
        res.status(200).send({
            message: "Login in successfully",
            data: newUser,
        })
    } catch (error) {
        res.json({
            code: 404,
            message: "error"
        })
    }
})
// login
server.post("/user/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const currentUser = await loginModel.findOne({ email });
        if (!currentUser) {
            throw new Error('user not default')
        }

        const currentPassword = await currentUser.comparePassword(password);
        if (!currentPassword) {
            throw new Error('password not default')
        }

        const token = jwt.sign({ userId: currentUser._id }, 'your-secret-key', { expiresIn: '1h' });
        res.json({
            data: token,
            code: 200,
            message: "error.message"
        })
    } catch (error) {
        res.json({
            code: 400,
            message: "success"
        })
    }
})

server.listen(port, () => {
    console.log(`server is running ${port}`);
})
