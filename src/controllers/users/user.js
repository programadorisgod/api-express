import { createUserModel, getUsersModel } from "../../models/users/user.js"


const getUsers = (req, res) => {

    const listUsers = getUsersModel()

    res.status(200).send(listUsers)
}


const createUser = (req, res) => {
    const user = req.body

    const userCreated = createUserModel(user)

    res.status(201).send(userCreated)
}



export { getUsers, createUser }