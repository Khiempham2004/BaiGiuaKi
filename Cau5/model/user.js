import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const loginSchema = new mongoose.Schema({
    email : {
        type : String,  
        require : true,
        unique : true,
    },
    password : String,
    deleted : {
        type : Boolean,
        require : true ,
    },
})

const loginModel = mongoose.model('login' , loginSchema)

export default loginModel   