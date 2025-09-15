import { createUserService, getUsersService } from "../services/user.service.js";

//create a new user

const createUser = async (req, res) => {
    const { name, email, phone_number, password, role } = req.body;

    try {
        const userId = await createUserService({ name, email, phone_number, password, role });
        res.status(201).json({message: "User created", userId});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//get all users

const getUsers = async (req, res) => {
    try {
        const users = await getUsersService();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

export {
    createUser,
    getUsers
}