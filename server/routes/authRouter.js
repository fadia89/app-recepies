
import { Router } from 'express';
import bcrypt from 'bcryptjs';
import verifyUserFields from '../middlewares/verifyUserFields.js';
import User from '../models/users.js';


 const authRouter = Router()

 authRouter.post ('/register', verifyUserFields, async (req, res) => {

  const {first_name, last_name, email, password} = req.body;
  try{
    
    const emailVerification = await User.exists({email}); //verifier si l'email dans la bdd
    //console.log (emailVerification);
    
    if (emailVerification)
      {
      return res.status(409).json ('Email alerdy taken');

    } 
    const salt =  await bcrypt.genSalt(10) // salt (une série de caractére) pour plus de complexité et sécurité
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(hashedPassword);
   const newUser = await new User ({
        first_name,
        last_name,
        email,
        password: hashedPassword
    });
   return res.status(201).json(newUser);
   

  
  }catch (err) {
    console.log(err);  
    return res.status(500).json({ message: 'Internal server error' }); 
  }
 })

 export default authRouter;
  
 
