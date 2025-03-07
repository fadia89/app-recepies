


const verifyUserFields = async (req, res, next) => {
    console.log(req.body);
    try {
      const { first_name, last_name, email, password } = req.body;
  
      // Vérification que tous les champs nécessaires sont présents
      if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({
          message: 'Tous les champs (firstName, lastName, email, password) sont nécessaires'
        });
      }
  
      // Si la validation passe, appeler next pour passer au middleware suivant
      next(); // validateurs
  
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
   export default verifyUserFields