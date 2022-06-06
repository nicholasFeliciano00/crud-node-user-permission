import users from "../database";

const deleteUserService = (id) => {
    const userIndex = users.findIndex(element => element.id === id);

    if(userIndex === -1){
        return "usuario não encontrado";
    }

    users.splice(userIndex, 1);

    return "Usuario excluido";
}

export default deleteUserService;