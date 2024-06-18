const mongoose = require('mongoose');
 

const facultySchema = new mongoose.Schema({
    name : String,
    age: Number,
    gender: String,
    experience : Number,
    type: String,
    qualification: String,
})

const Faculty = mongoose.model('Faculty', facultySchema)

module.exports = { Faculty };