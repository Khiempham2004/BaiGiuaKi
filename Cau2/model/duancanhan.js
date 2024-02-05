import { request } from 'express';
import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const duAnCaNhanSchema = new mongoose.Schema ({
    id_Thongtincanhan : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Thongtincanhan' 
    },
    tenDuAn : {
        type : String,
        require : true,
    },
    NoiDung : {
        type : String,
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

const DUANCANHAN = mongoose.model('DuAnCaNhan',duAnCaNhanSchema)

export default DUANCANHAN;