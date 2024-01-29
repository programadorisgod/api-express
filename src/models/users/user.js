
const getUsersModel = () => {
    const listUsers = [
        {
            name: "MATAJICHOSTV",
            age: 19
        },
        {
            name: "frontend03",
            age: 19
        }
    ]
    return listUsers
}


const createUserModel = (user) => {
    const listUser = []
    listUser.push(user)
    return { message: 'User created' }
}


export { createUserModel, getUsersModel }