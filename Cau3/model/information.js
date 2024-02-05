import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SoThichSchema = new mongoose.Schema({
    ten_SoThich : {
        type : String,
        require : true , 
    },
    mo_ta : {
        type : String,
    },
});

const MucTieuCaNhanSchema = new mongoose.Schema({
    ten_muc_tieu : {
        type : String,
        require : true,
    },
    mo_ta : {
        type : String,
    },
    muc_tieu_con : {
        type: Array,
    },
    thoi_han : {
        type : Date,
    },
    tien_do : {
        type : Number,
    }
})

const SOTHICH = mongoose.model("SoThich" , SoThichSchema)
const MucTieuCaNhan = mongoose.model("MucTieuCaNhan" , MucTieuCaNhanSchema)

export default SOTHICH; 