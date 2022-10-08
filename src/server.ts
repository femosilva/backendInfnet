import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();
mongoose.connect('mongodb+srv://fmsilva:24636112@cluster0.csvyt3s.mongodb.net/?retryWrites=true&w=majority')

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('rodou')
})