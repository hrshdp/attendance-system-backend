import pool from "../db/connection.js";

//create a new user

const createUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const [result] = await pool.query(
            "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
            [name, email, password, role || "student"]
        ); 

        res.status(201).json({message: "User created", userId: result.insertId});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//get all users

const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT id, name, email, role, created_at FROM users"
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

export {
    createUser,
    getUsers
}