const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", taskRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI,)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
