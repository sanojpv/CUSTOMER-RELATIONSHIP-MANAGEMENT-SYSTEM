import mongoose from "mongoose";


const caseSchema = new mongoose.Schema({
    title: { type: String , required: true , trim: true },
    customerId : { type: mongoose.Schema.Types.ObjectId , ref: "Customer" , required: true  },
    assignedTo : { type: mongoose.Schema.Types.ObjectId , ref: "User" , required: true },
    
    description : { type: String , required: true , trim: true },
    status : { type: String , required: true , trim: true , enum: ["open" , "in_progress" , "closed"]},
}, {timestamps: true})

export default mongoose.model("Case", caseSchema);