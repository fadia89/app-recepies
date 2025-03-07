import { Router } from "express";
import { getAllRecipes, addRecipe, getRecipeByID, updateRecipe,deleteRecipe} from "../controllers/recipesController.js";
import verifyRecipeFields from "../middlewares/verifyRecipeFields.js";



const recipesRouter = Router ();

recipesRouter.get('/recipes',getAllRecipes);

recipesRouter.post('/recipes',verifyRecipeFields,addRecipe );

recipesRouter.get('/recipes/:id', getRecipeByID); 


recipesRouter.put('/recipes/:id', updateRecipe);

recipesRouter.delete('/recipes/:id', deleteRecipe);



export default recipesRouter;
