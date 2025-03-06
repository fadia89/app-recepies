import mongoose from "mongoose";
const { Schema } = mongoose;



const userSchema = new Schema ({
    first_name: {
        type: String,
        required: true
    },
    Last_name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

export default mongoose.model('user', userSchema)