
 import User from "../models/users.js"; 
 import mongoose from 'mongoose';

 export const getAllUsers =  async (req, res) => {
  try {
    // Récupérer tous les utilisateurs de la base de données
    const users = await User.find();  // utiliser le modèle Mongoose pour les utilisateurs
    if (users.length < 1) {  
      return res.status(404).json({ message: 'No user found' });  
    }
    return res.json(users);  // Renvoi des utilisateurs au format JSON
  } catch (err) {
    console.log(err);  
    return res.status(500).json({ message: 'Internal server error' }); 
  }
};


export const getUserByID = async (req, res) => {
  const {id} = req.params;  
  try {
    
    const userByID = await User.findById(id); 

    // Vérifie si l'utilisateur existe
    if (!userByID) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(userByID);  // Si l'utilisateur est trouvé, renvoie les données
  } catch (err) {
    console.log(err); 
    return res.status(500).json({ message: 'Internal server error' });
  }
};


export const AddUser = async (req, res) => {
  //console.log(req.body)
  const {first_name,last_name, email, password} = req.body;
  try{
    const newUser = await User.create(req.body);
    return res.status(200).json(newUser);

  }
  catch (err){
    console.log(err);
    return res.status(500).json({message:'Internal server error'});
  }
};

export const updateUser = async (req, res) => {
  const {id} =  req.params;
  console.log(id);
  const { first_name, last_name, email, password } = req.body;
    try {
        const userByID= await User.findByIdAndUpdate(id, req.body,{new: true});
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


    try {
        const userByID= await User.findByIdAndDelete(id);
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
