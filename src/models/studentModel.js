const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      subject: {
        type: String,
        required: true,
        enum: ["English", "Hindi", "Maths", "Science"],
        trim: true,
      },
      marks: {
        type: Number,
        required: true,
        trim: true,
      },
      teacherId: {
        type: ObjectId,
        ref: "teacher",
        required: true
      },
      isDeleted: {
        type: Boolean,
        default: false,
      }

},{timestamps:true})

module.exports = mongoose.model('Student', studentSchema);