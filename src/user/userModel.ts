import mongoose from "mongoose";
import { User } from "./userTypes";


const  useerSchema = new mongoose.Schema<User>({
   {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.model('User',useerSchema)

