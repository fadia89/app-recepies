
const verifyRecipeFields = async (req, res, next) => {
    console.log(req.body);
    try {
      const {title,category,country,descriptions,ingredients,steps,author} = req.body;
  
      // Vérification que tous les champs nécessaires sont présents
      if (!title || !category || !country || !descriptions || !ingredients ||steps || author ) {
        return res.status(400).json({
          message: 'Tous les champs (title,  category, country, description, ingredients, steps, author) sont nécessaires'
        });
      }
  
      // Si la validation passe, appeler next pour passer au middleware suivant
      next(); // validateurs
  
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
   export default verifyRecipeFields