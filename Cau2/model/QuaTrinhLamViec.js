import { request } from 'express';
import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const QuaTrinhLamViecSchema = new mongoose.Schema ({
    id_Thongtincanhan : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Thongtincanhan' 
    },
    tenCongTy : {
        type : String,
        require : true,
    },
    vaiTro : {
        type : String,
    },
    thoiGianBatDau : {
        type : Date,
    },
    thoiGianKetThuc : {
        type : Date,
    }

});

const QUATRINHLAMVIEC = mongoose.model('QuaTrinhLamViec',QuaTrinhLamViecSchema)

export default QUATRINHLAMVIEC;