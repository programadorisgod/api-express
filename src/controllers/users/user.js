
export default class UserController {
    constructor({ userModel }) {
        this.userModel = userModel
    }

    create = async (req, res) => {
        try {
            const newUser = await this.userModel.create({ input: req.body })
            res.status(201).json(newUser)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    findOne = async (req, res) => {
        try {
            console.log(req.params.id)
            const user = await this.userModel.findOne({ id: req.params.id })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ error: error.message })

        }
    }

    findAll = async (_req, res) => {
        try {
            const users = await this.userModel.findAll()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({ error: error.message })

        }
    }
}