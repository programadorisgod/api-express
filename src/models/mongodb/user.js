import { Schema, model } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
},
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model('User', userSchema)

export default User