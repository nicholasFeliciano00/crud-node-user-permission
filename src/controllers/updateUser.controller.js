import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {

    const { id } = request.params;
    const { name, email } = request.body;
    const updateUser = updateUserService(id, email, name);

    return response.json(updateUser);

}

export default updateUserController;