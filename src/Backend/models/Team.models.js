import mongoose from 'mongoose';

const teamSchema= new mongoose.Schema({
    teamname:{
        type:String,
        required:true
    },
    teamleader:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    teammates:{
        type:Number,
        required:true,
        enum:[2,3,4]
    },
    numberoffemales:{
        type: Number,
        required:true
    },
    numberofmales:{
        type:Number,
        required:true
    }
    ,
    teamdetails:{
        type: [mongoose.Schema.Types.ObjectId],
        ref:"User",
        required:true,
        unique:true
    },
    // kept for future references 
    // abstract:{
    //     type:String,
    //     required:true
    // },
    theme:{
        type:String,
        required:true,
        // enum:['dark','light'] themes to be added later
    }
},{
    timestamps:true
});

const Team= new mongoose.model('team',teamSchema);

export default Team;