import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose.connect('mongodb://')

app.listen(3000, () => {
    console.log('rodou')
})
app.use(express.json());