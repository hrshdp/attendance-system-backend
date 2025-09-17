import pool from "../db/connection.js";
import bcrypt from "bcrypt";


//create a new user (with hashing)
/* 
1. Receive user data from the request body
2. Hash the password using bcrypt
3. Insert new user into the MySQL database
4. Return id

*/

const createUserService = async ({ name, email, phone_number, password, role }) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
        "INSERT INTO users (name, email, phone_number, password, role) Values (?, ?, ?, ?, ?)",
        [name, email,phone_number, hashedPassword, role || "student"]
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