import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import contactRoutes from "./routes/contact.routes.js";
import trackRoutes from "./routes/track.routes.js";

dotenv.config();

const app = express();

/* ==============================
   🔥 CORS FIX (IMPORTANT)
============================== */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://my-portfolio-eta-inky-19.vercel.app", // 🔥 UPDATED
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

/* ==============================
   🔥 Middleware
============================== */
app.use(express.json());

/* ==============================
   🔥 Routes
============================== */
app.use("/api/contact", contactRoutes);
app.use("/api/track", trackRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running 🚀");
});

/* ==============================
   🔥 Database + Server Start
============================== */

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected 🚀");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed ❌", err);
  });