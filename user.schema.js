const mongoose = require('mongoose')
// const { Number } = require('mongoose/lib/schema/index')
const Schema = mongoose.Schema
const userSchema = new Schema ({
    name:String,
    email:String,
    phone:Number,
    age: Number
})
module.exports = mongoose.model ('user',userSchema)