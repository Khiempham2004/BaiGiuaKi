import mongoose from "mongoose";

export const connect = async ()=> {
  try {
    await mongoose.connect('mongodb://127.0.0.1/FullStack');
    console.log("Connect Success!");
  } catch (error) {
    console.log(error)
    console.log("Connect Error!");
  }
}
