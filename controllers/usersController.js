 import users from "../models/users.js";
 import user from "../models/users.js"; 
 import mongoose from 'mongoose';

 export const getAllUsers =  async (req, res) => {
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
};


export const getUserByID = async (req, res) => {
  const {id}= req.params;
  //console.log(req.params);
  try{
    const userByID =  await usersRouter.findByID(id);
    return res.satus(200).json(userByID);
  }
  catch (err){
    console.log(err);
    return res.staus(500).json({message:'Internal server error'})

  }

}

export const AddUser = async (req, res) => {
  //console.log(req.body)
  const {firstName,lastName, email, password} = req.body;
  try{
    const newUser = await user.create(req.body);
    return res.status(200).json(newUser);

  }
  catch (err){
    console.log(err);
    return res.status(500).json({message:'Internal server error'});
  }
};

export const updateUser = async (req, res) => {
  const {id} =  req.params
  console.log(id);
  const { firstName, lastName, email, password } = req.body;
    try {
        const userByID= await user.findByIdAndUpdate(id, req.body,{new: true});
        return res.json(userByID)
    }
    catch (err){
    console.log(err);
    return res.status(500).json({message:'Internal server error'})
  }
};

export const deleteUser = async (req, res) => {
  const {id} =  req.params
  console.log(id);

  // Vérification de la validité de l'ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID utilisateur invalide' });
  }
  
  
    try {
        const userByID= await user.findByIdAndDelete(id);
       if(!userByID)
            {
            return response.status(200).json('User not found');
        }
        return res.status(200).json({ message: 'User successfully deleted' });  
    }
    catch (err){
    console.log(err);
    return res.status(500).json({message:'Internal server error'});
  }
};
