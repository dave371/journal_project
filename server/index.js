// * Import Libs
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// * Import an files
import journalRoutes from "./routes/journalRouter.js";

// * Create an express app
const app = express();
dotenv.config();

// * Apply middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// * Apply Routes
app.use("/journal", journalRoutes);

// * Connection to the database
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_URL)
  .then(
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
  )
  .catch((error) => console.log(error));
