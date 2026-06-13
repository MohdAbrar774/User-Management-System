import User from "../models/user.model.js";


const addUserController = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const user = await User.create({
            name,
            email,
            age,
        })

        res.status(201).json(user)

    } catch (error) {
        res.status(500).json({
            message: 'Failed to create user in DB',
            error: error.message
        })

    }
}

const getUserController = async (req, res) => {
    try {

        const users = await User.find();

        res.status(200).json(users)


    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch users',
            error: error.message
        })
    }
}

const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await User.findByIdAndDelete({ _id: id })

        if (!result) {
            return res.status(404).json({
                error: 'User not found'
            });
        }

        res.status(200).json({
            message: 'User deleted Successfully'
        })


    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete user ',
            error: error.message
        })
    }
}


export {
    addUserController,
    deleteUserController,
    getUserController
}