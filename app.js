// app.js
// Entry point: Express server setup

const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 3000;

// Built-in middleware to parse JSON request bodies
app.use(express.json());

// Custom logger middleware (applies to every request)
app.use(logger);

// Root route - simple health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "Student Management REST API is running 🚀" });
});

// Mount student routes at /students
app.use("/students", studentRoutes);

// ---------------------------------------------------
// 404 handler - runs when no route matches
// ---------------------------------------------------
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ---------------------------------------------------
// Global error handler - catches any unexpected errors
// ---------------------------------------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
