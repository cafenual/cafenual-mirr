import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routers/userRouter";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    console.log(":white_check_mark::white_check_mark: 디비가 실행되었다..")
  )
  .catch((err) => console.log(err));

const handleListening = () => {
  console.log(`서버가 실행되었습니다 : http://localhost:${process.env.PORT}`);
};

app.use("/api/user", userRouter);

app.listen(process.env.PORT, handleListening);
