import Recipe from "../models/recipes.js"; 
import user from "../models/users.js"; 

export const getAllRecipes =  async (req, res) => {
    //console.log('aaaa')
  try {
   
    const recipes = await Recipe.find().populate('author');
    console.log(recipes)
    if (recipes.length < 1) {  
      return res.status(404).json({ message: 'No recipes found'});  
    }
    return res.json(recipes);  
  } catch (err) {
    console.log(err);  
    return res.status(500).json({ message: 'Internal server error' }); 
  }
};

export const addRecipe = async (req, res) => {
  console.log(req.body)
  const {} = req.body;
  try{
    const newRecipe = await Recipe.create(req.body);
    return res.status(200).json(newRecipe);

  }
  catch (err){
    console.log(err);
    return res.status(500).json({message:'Internal server error'});
  }
};
 export const getRecipeByID = async (req, res) => {
    
    const {id} = req.params;
    console.log(req.params);
    try{
        const recipeByID = await Recipe.findById(id);
        if (!recipeByID){
            return res.status(404).json({ message: 'Recipe not found' });
        }
        return res.status(200).json(recipeByID);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({message:'Internal server error'});
    }
 }

 export const updateRecipe = async (req, res) => {
    const {id} = req.params;
    const {title,category,country,descriptions,ingredients,steps,author} = req.body
    //console.log(id);
    try {
        const recipeByID = await Recipe.findByIdAndUpdate(id ,req.body,{new: true});
        if (!recipeByID){
            return res.status(404).json({ message: 'Recipe not found' });
        }
        return res.status(200).json(recipeByID);
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({message:'Internal server error'}); 
    }

 }

 export const deleteRecipe = async (req, res) => {
    const {id} =  req.params
    try {
            const recipeByID= await Recipe.findByIdAndDelete(id);
           if(!recipeByID)
                {
                return response.status(200).json('Recipe not found');
            }
            return res.status(200).json({ message: 'Recipe successfully deleted' });  
        }
        catch (err){
        console.log(err);
        return res.status(500).json({message:'Internal server error'});
      }
};
    

 