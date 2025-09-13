import express from "express";
import pool from "./db/connection.js";

const app = express();
app.use(express.json());


// routes

import userRouter from "./routes/user.routes.js";


//routes declaration
app.use("/api/v1/users", userRouter)

app.get("/health", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT 1 + 1 AS result");
        res.json({ status: "ok", db: rows[0].result });
    } catch (err) {
        res.status(500).json({status: "error", error: err.message });
    }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));