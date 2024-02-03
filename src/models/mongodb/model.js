import { connect } from "mongoose"
import User from "./user.js"

const conectionDB = async () => {
    try {
        await connect(process.env.DB_URI, {
            maxPoolSize: 5,
            minPoolSize: 0,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('[Database] Conected to MongoDB')
    } catch (error) {
        console.log('[Database] Error to connect to MongoDB', error)
    }

}

conectionDB()

export default class UserModel {

    static async create({ input }) {
        try {
            const newUser = await User.create(input)
            return newUser
        } catch (error) {
            throw new Error(error)
        }
    }

    static async findOne({ id }) {
        try {
            const user = await User.findById(id)
            return user
        } catch (error) {
            throw new Error(error)
        }
    }

    static async findAll() {
        try {
            const users = await User.find()
            return users
        } catch (error) {
            throw new Error(error)

        }
    }
}