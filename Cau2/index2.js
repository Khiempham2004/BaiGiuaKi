import express from 'express'
import mongoose from 'mongoose';

import DUANCANHAN from './model/duancanhan.js';
import KYNANGCANHAN from './model/kynangcanhan.js';
import QUATRINHLAMVIEC from './model/QuaTrinhLamViec.js';

const app = express();
const port = process.env .PORT  || 3000;

app.use(express.json());
async function connectDB(){
    await mongoose.connect('mongodb://127.0.0.1/FullStack')
}
connectDB();



app.get("/information" , async (req , res) => {
    try {
        const information = await KYNANGCANHAN.find({deleted:false})
     
        res.status(200).send(information)
    } catch (error) {
        res.status(500).send("information not default!")
    }
})

app.use(express.json());
app.post("/information/create" , async (req , res) => {
    try {
        const informationShip = await KYNANGCANHAN.create(req.body)
        informationShip.save();
        res.status(200).send(informationShip)
    } catch (error) {
        res.status(500).send("information not default!")
    }
})

app.put("/information/update/:id" , async (req ,res ) => {
    try {
        const information = await KYNANGCANHAN.findByIdAndUpdate(req.params.id , req.body ,{})
        res.status(200).send(information)
    } catch (error) {
        console.log(error);
        res.status(500).send("information not default")
    }
})

app.patch("/information/delete/:id" , async (req ,res ) => {
    try {
        const id = req.params.id;
        // const information = await KYNANGCANHAN.findByIdAndDelete({})
        await KYNANGCANHAN.updateOne({_id : id} , {deleted : true})
        res.json({
            code: 200,
            message : 'success'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("information not default")
    }
})



app.listen(port , () =>{
    console.log(`localhost running user ${port}`);
})