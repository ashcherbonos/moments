import dotenv from 'dotenv';
import express, { Express } from 'express';
import { connect } from 'mongoose';
import { dbConfig } from './config/db.config';
import { galleriesRoute } from './routes/galleries.routes';

dotenv.config();

const app: Express = express();

app.use('/api/galleries', galleriesRoute);

connect(dbConfig.url);

app.listen(process.env.PORT, () => {
  console.log(
    `server running : http://${process.env.HOST}:${process.env.PORT}`
  );
});
