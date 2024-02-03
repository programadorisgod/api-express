import { config } from "dotenv"
import { connect } from "mongoose"
config()

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

export default conectionDB