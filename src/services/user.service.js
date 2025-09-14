import pool from "../db/connection.js";
import bcrypt from "bcrypt";


//create a new user (with hashing)

const createUserService = async ({ name, email, password, role }) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
        "INSERT INTO users (name, email, password, role) Values (?, ?, ?, ?)",
        [name, email, hashedPassword, role || "student"]
    );

    return result.insertId;
};

//fetch all users

const getUsersService = async () => {
    const [rows] = await pool.query(
        "SELECT id, name, email, role, created_at FROM users"
    );
    return rows;
};

export {
    createUserService,
    getUsersService
}