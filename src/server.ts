import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();
mongoose.connect(
  "mongodb+srv://fmsilva:24636112@cluster0.csvyt3s.mongodb.net/?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200
  })
);
app.use(routes);
app.listen(3000);
