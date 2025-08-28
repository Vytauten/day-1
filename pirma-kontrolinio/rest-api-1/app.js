import express from "express";
import apiRoutes from "./routes/apiRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(express.static("public"));
dotenv.config();
//Connect to DB
mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

// routes
app.use("/api", apiRoutes);
app.get("/", (req, res) => res.render("home"));
