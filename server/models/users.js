import mongoose from "mongoose";
const { Schema } = mongoose;



const userSchema = new Schema ({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
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

export default mongoose.model('User', userSchema)
//user c'est le nom de modéle (tjr en majuscule)