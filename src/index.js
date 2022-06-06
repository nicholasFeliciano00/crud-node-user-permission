import express from "express"
import createUserController from "./controllers/createUser.controller";
import deleteUserController from "./controllers/deleteUser.controller";
import listUsersController from "./controllers/listUsers.controller";
import loginUserController from "./controllers/loginUser.controller";
import updateUserController from "./controllers/updateUser.controller";
import verifyAuthTokenMiddleware from "./middlewars/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "./middlewars/verifyEmailAvailability.middleware";

const users = [];

const app = express();
app.use(express.json());

app.post('/user',verifyEmailAvailabilityMiddleware, createUserController);

app.patch('/user/:id',verifyAuthTokenMiddleware, updateUserController);

app.delete('/user/:id',verifyAuthTokenMiddleware, deleteUserController)

app.get("/user", listUsersController);

app.post("/user/login", loginUserController);



app.listen(3000);