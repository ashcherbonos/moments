import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const allowedOrigins = [`${process.env.FRONTHOST}`];
export const crossConfig: cors.CorsOptions = {
  origin: allowedOrigins,
};
