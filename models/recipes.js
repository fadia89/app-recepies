import mongoose, {Schema} from "mongoose"



const recipesSchema = new Schema ({
    title : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    country :  {
        type : String
    },
    descriptions :  {
        type : String
    },
    ingredients : [{
        type : String,
    }],
    steps : [{
        type : String,
    }],
    author : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    },
})

export default mongoose.model('Recipe', recipesSchema)