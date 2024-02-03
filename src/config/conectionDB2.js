import Sequelize from 'sequelize'
import { config } from 'dotenv'
config()
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
})

const conectionDB2 = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conected to MySQL')
    } catch (error) {
        console.log('Error to connect to MySQL', error)
    }
}

export default conectionDB2