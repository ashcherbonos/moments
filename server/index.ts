import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send("It's alive!!!");
});

app.listen(port);
