import { Router } from "express";
import { getAllUsers, getUserByID, AddUser,updateUser, deleteUser } from "../controllers/usersController.js";
import verifyUserFields from "../middlewares/verifyUserFields.js";
import User from "../models/users.js"; 


const usersRouter = Router();

usersRouter.get('/users', getAllUsers) 


usersRouter.get('/users/:id', getUserByID); 


usersRouter.post('/register', verifyUserFields,AddUser) ;

usersRouter.put('/users/:id', updateUser) ;

usersRouter.delete('/users/:id', deleteUser);



export default usersRouter;

