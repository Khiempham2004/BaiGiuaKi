import express from 'express'
import mongoose from 'mongoose';
import SOTHICH from './model/information.js';
const app = express();
const port = 8000;

app.use(express.json());
async function connectDB(){
    await mongoose.connect('mongodb://127.0.0.1/FullStack')
}
connectDB();

app.get("/user" , async (req , res) => {
    try {
        const id = req.params.id;
        const user = await SOTHICH.find({deletd : true})
        res.json({
            code : 200 ,
            data : user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("user not default")
    }
})
app.use(express.json())
app.post("/user/create" , (req , res) => {
    try {
        const user = new SOTHICH(req.body)
        user.save();
        res.status(200).send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send("user not default")
    }
})

app.put("/user/update/:id" , async (req , res) => {
    try {
        const user = await SOTHICH.findByIdAndUpdate(req.params.id , req.body , {})
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(`user not default ${error.message}`)
    }
})
app.patch("/user/delete/:id" , async (req , res) => {
    try {
        const id = req.params.id;
        await SOTHICH.updateOne({_id : id} , {deleted : true})
        res.json({
            code :200,
            message : "success"
        })
    } catch (error) {
        res.status(500).send("user not default")
    }
})

app.listen(port , () => {
    console.log(`express is running ${port}`);
})