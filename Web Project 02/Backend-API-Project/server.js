const express = require("express");

const app = express();

const studentRoutes = require("./routes/students");

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Student Management API 🚀");
});

// Student Routes
app.use("/students", studentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});