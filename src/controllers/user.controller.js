import { createUserService, getUsersService } from "../services/user.service.js";


//create a new user

const createUser = async (req, res) => {
    try {
        //at this point, req.body is validated
        const { name, email, phone_number, password, role } = req.body;

        const userId = await createUserService({
            name,
            email,
            phone_number,
            password,
            role,
        });

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            userId,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Failed to create user",
            error: err.message,
        });
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