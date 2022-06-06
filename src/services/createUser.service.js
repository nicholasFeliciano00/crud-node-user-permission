import users from "../database";
import { v4 as uuidv4} from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = {
        id: uuidv4(),
        email,
        name,
        password: hashedPassword
    };
    
    users.push(newUser);
    return users;
}

export default createUserService;