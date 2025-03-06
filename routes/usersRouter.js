import { Router } from "express";

import user from "../models/users.js"; 

const usersRouter = Router();

usersRouter.get("/users", async (req, res) => {
  try {
    // Récupérer tous les utilisateurs de la base de données
    const users = await user.find();  // utiliser le modèle Mongoose pour les utilisateurs
    if (users.lenght < 1) {  
      return res.status(404).json({ message: 'No users found' });  
    }
    return res.json(users);  // Renvoi des utilisateurs au format JSON
  } catch (err) {
    console.log(err);  
    return res.status(500).json({ message: 'Internal server error' }); 
  }
});

export default usersRouter;

