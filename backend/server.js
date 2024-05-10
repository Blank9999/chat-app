import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageroutes.js";
import userRoutes from "./routes/userroutes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
