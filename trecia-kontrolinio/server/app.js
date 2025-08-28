import express from "express";
import dotenv from "dotenv";
import darbaiRoutes from "./routes/darbaiRoutes.js";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.js";

//ENV
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

//mid
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/darbai", darbaiRoutes);
app.use("/api/user", userRoutes);

//Connect to Mongoose
mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
