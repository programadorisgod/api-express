import { Router } from "express";
import { createUser, getUsers } from "../../controllers/users/user.js";


const routerUser = Router()
const baseUrl = '/api/v1/users'

routerUser.get(baseUrl, getUsers)


routerUser.post(baseUrl, createUser)

export default routerUser