import express from 'express'
import connectDB from './client/db.js';
import 'dotenv/config';
import usersRouter from './routes/usersRouter.js';
import { Model } from 'mongoose';

const app = express();

const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api',usersRouter);




connectDB();


app.listen(PORT, () => {
    console.log(`Bonjour, bienvenue sur mon serveur Express! ${PORT}`);
  });