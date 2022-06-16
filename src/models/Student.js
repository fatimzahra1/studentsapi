
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const studentSchema = new Schema({
  name: {
    type: String,

  
  },
  phone: {
    type: Number,
    required: false
  },
  email: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

