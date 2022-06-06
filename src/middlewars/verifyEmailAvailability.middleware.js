import users from "../database";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
    const { email } = request.body;

    const userAlreadyExists = users.find((user) => user.email === email);

    if(userAlreadyExists) {
        return response
        .status(400)
        .json({message: "Email ja esta em uso"});
    }

    next();
}

export default verifyEmailAvailabilityMiddleware;