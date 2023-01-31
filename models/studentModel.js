import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
name:{type:String, required:true, trim:true},
age:{type:Number, required:true, min:18, max:40},
fees:{type:mongoose.Decimal128, required:true, validate:
    (value)=>value >=5000.5},
})

const Student = mongoose.model('student', studentSchema)

export default Student;


