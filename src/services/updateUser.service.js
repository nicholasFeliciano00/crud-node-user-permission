import users from "../database";

const updateUserService = (id, email, name) => {
    const userUpdate = {
        id,
        email,
        name
    };

    const userIndex = users.findIndex(element => element.id === id);

    if(userIndex === -1){
        return "usuario não encontrado";
    }

    users[userIndex] = {...users[userIndex], ...userUpdate};

    return users[userIndex];
}

export default updateUserService;