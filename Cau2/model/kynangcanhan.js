import { request } from 'express';
import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const kynangcanhanSchema = new mongoose.Schema ({
    id_Thongtincanhan : {
        type : String,
        ref : 'Thongtincanhan' 
    },
    tenKyNang : {
        type : String,
        require : true,
    },
    moTa : {
        type : String,
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

const KYNANGCANHAN = mongoose.model('KyNangCaNhan',kynangcanhanSchema)

export default KYNANGCANHAN;