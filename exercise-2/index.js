import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRouter from './route/book.js'
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json())
app.use('/book',bookRouter)
app.get('/', (req, res) => {
    res.send("hello exercise 2")
})
mongoose.connect(process.env.MONGO_URI).then(() => console.log("mongodb connected"))
.catch((error)=>console.log("mongodb is not connect",error))
app.listen(port, () => {
    console.log(`server running is ${port}`)
})