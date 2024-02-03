import Sequelize from 'sequelize'
import { Model, DataTypes } from 'sequelize'


export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
})

const conectionDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conected to MySQL')
    } catch (error) {
        console.log('Error to connect to MySQL', error)
    }
}

conectionDB()

class User extends Model { }


User.init({
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

export default class UserModel {
    static async create({ input }) {
        try {
            await sequelize.sync()
            const newUser = await User.create(input)
            return newUser
        } catch (error) {
            throw new Error(error)
        }
    }

    static async findOne({ id }) {
        try {
            await sequelize.sync()
            const user = await User.findByPk(id)
            return user
        } catch (error) {
            throw new Error(error)
        }
    }

    static async findAll() {
        try {
            await sequelize.sync()
            const users = await User.findAll()
            return users
        } catch (error) {
            throw new Error(error)
        }
    }
}