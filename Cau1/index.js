import express, { response } from 'express';
import userModel from './model/user.js';

const app = express();
const port = 3000;

 
 
import * as database from "./config/Database.js";
database.connect();

app.use(express.json())
app.get("/users" , async (req , res) => {
    try {
        const user = await userModel.find({deleted:false});
        res.json({
            code: 200,
            data: user
        })
        // res.status(200).send(user)
    } catch (error) {
        console.log(error)
        res.json({
            code: 400
        })
    }
})

app.post("/users/create" , async (req , res) => {
    try {
        const user = new userModel(req.body);
        user.save();
        res.json({
            data:user
        })
    } catch (error) {
        res.status(500).send("users not default")
    }
})

app.put("/users/update/:id" , async (req ,res) => {
    try {
        const updateUser = await userModel.findByIdAndUpdate(req.params.id , req.body ,{});
        res.status(200).send(updateUser)
    } catch (error) {
        res.status(404).send("Error updating user")
    }
})

app.patch("/users/delete/:id" , async(req , res) =>{
    try {
        const id = req.params.id;
        await userModel.updateOne({_id: id},{deleted: true});
        res.json({
            code: 200,
            message: "success"
        })
    } catch (error) {
        res.status(404).send("user not default")
    }
})


app.listen(port , () => {
    console.log(`localhost is running ${port}`);
})