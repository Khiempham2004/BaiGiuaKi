import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new mongoose.Schema ({
    ho_ten: String,
    ngay_sinh: {
        type: Date,
        default: new Date(),
    },
    noi_sinh: String,
    quoc_tich: String,
    deleted: {
        type: Boolean,
        default: false
    }
});

const userModel = mongoose.model('users',userSchema, 'users')

export default userModel;