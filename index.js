import express, { json } from 'express'

import routerUser from './src/routes/users/user.js'
import conectionDB from './src/config/conectionDB.js'
import conectionDB2 from './src/config/conectionDB2.js'

const app = express()
const PORT = 3000


/* Middleware */
app.use(json())


app.get('/', (req, res) => {

    const data = {
        url: req.url,
    }
    res.status(200).send({
        message: 'Mi primer api con express',
        data
    })
})


/* Conexion DB 
*/

conectionDB2()
conectionDB()

/* Routes */
app.use(routerUser)

app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`)
}) 