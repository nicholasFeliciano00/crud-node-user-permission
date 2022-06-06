import createUserService from "../services/createUser.service";

const createUserController = (request, response) => {
    const { email, name, password } = request.body;

    const user = createUserService(email, name, password);
    return response.json(user);
}

export default createUserController;