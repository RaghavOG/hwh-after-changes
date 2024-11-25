import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    contact:{
        type:String,
        required:true,
        unique:true
    },college:{
        type:String,
        required:true
    }, Stream:{
        type:String,
        required:true

    }, Year:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});

const User= new mongoose.model('user',userSchema);
export default User;