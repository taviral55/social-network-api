import express from "express";
import postRouter from "./routes/post.route.js";
import userRouter from "./routes/user.route.js";
import friendsRouter from "./routes/friend.route .js";
import connectDB from "./db/dbConnection.js";

const PORT = 3003;
const app = express();

app.use(express.json());

app.use("/api/v1/", postRouter);
app.use("/api/v1/", userRouter);
app.use("/api/v1/", friendsRouter);

const startServer = async () => {
  try {
    await connectDB("mongodb+srv://taviral55:Efisinsauto5@cluster0.yd2b7s3.mongodb.net/");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
