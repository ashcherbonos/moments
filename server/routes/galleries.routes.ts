import { Router } from 'express';
import { getList } from '../controllers/galleries.controller';

export const galleriesRoute = Router();

galleriesRoute.get('/', (req, res) => {
  getList(req, res);
});
