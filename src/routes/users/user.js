import { Router } from "express";
import UserController from "../../controllers/users/user.js";



export const createRouterUser = ({ userModel }) => {

    const routerUser = Router()

    const baseUrl = '/api/v1/users'

    const userController = new UserController({ userModel })

    routerUser.get(baseUrl, userController.findAll)

    routerUser.get(`${baseUrl}/:id`, userController.findOne)


    routerUser.post(baseUrl, userController.create)

    return routerUser
}