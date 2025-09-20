import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {type: String, required: true, trim: true, unique: true,match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"]} , // Email validation
    phone: { type: String, required: true,trim: true,unique: true,match: [/^\d{10}$/, "Please provide a valid 10-digit phone number"]} , //  Phone validation
    address: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("Customer", customerSchema);
