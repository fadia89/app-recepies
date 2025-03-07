import express from 'express'
import connectDB from './dataBase/db.js';
import 'dotenv/config';
import usersRouter from './routes/usersRouter.js';
import recipesRouter from './routes/recipesRouter.js';
import authRouter from './routes/authRouter.js'
import cors from 'cors';


const app = express();

const PORT = process.env.PORT;

// Activer CORS pour toutes les requêtes
app.use(cors());

//pour les formulaires: récupérer la data saisie 
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api',usersRouter, recipesRouter);
app.use('/auth',authRouter);
//app.use('/api', recipesRouter)
/*
const middleware () => { console.log ('')}
 app.get ('/', middeleware, (req, res, next)=>{
  return res.end('welcom to my ecents API')
 })

*/
connectDB();


app.listen(PORT, () => {
    console.log(`Bonjour, bienvenue sur mon serveur Express! ${PORT}`);
  });