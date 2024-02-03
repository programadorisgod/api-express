import { sequelize } from "../../config/conectionDB2.js"
import User from "../../models/users/user2.js"


const getUsers = async (req, res) => {

    try {
        await sequelize.sync()
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: 'Error to get users', error })

    }

}


const createUser = async (req, res) => {
    const user = req.body
    try {
        await sequelize.sync()
        const newUser = await User.create(user)
        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json({ message: 'Error to create user', error })
    }
}


export { getUsers, createUser }