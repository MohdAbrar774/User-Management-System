import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    age: {
        type: Number,
        min: [1, 'Age must be a positive number'],
        required: [true, 'Age is required'],
    }

}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)
export default User; 