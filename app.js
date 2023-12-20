const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const userinfo = require('./user.schema')
const URL = "mongodb+srv://gemy:Hana%40sama279@gemy.e7pmhfw.mongodb.net/gemy?retryWrites=true&w=majority"
const app = express()
app.use(bodyParser.json())

const connectDB = () => {
 try {
    mongoose.set('strictQuery', false)
    mongoose.connect(URL)
    console.log("Connected to Mongo DB");
 } catch (error) {
    console.log(error);
    
 }
}
connectDB()


app.get("/users", async function (req, res) {
    const user = await userinfo.find()
    res.json({ user: user, mesaage: "done" })

})

app.post("/users", async function (req, res) {
    const user = await userinfo.create(req.body)

    res.json({ mesaage: "Done Added", user: user })


})

app.put("/users/:id", async function (req, res) {
    let id = req.params.id
    await userinfo.findByIdAndUpdate(id, req.body)


    res.json({ mesaage: "Done updated" })
})





app.delete("/users/:id", async function (req, res) {
    let id = req.params.id
    await userinfo.findByIdAndDelete(id)


    res.json({ mesaage: "Done deleted" })


})

app.listen(9008)