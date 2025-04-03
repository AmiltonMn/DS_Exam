import express from 'express';
import initRoutes from './routes/routes';
import connectDB from './database/database';

const app = express();

connectDB();

import cors from 'cors';
app.use(cors());

const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

initRoutes(app);