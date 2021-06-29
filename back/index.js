import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin1:admin305988!@cafenual.3eyik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("db실행되었습니다."))
  .catch((err) => console.log(err));

const handleListening = () => {
  console.log("서버가 실행되었습니다 : http://localhost:4000");
};

app.listen(4000, handleListening);
