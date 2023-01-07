import { Router } from 'express';
import { addLike, getList } from '../controllers/galleries.controller';

export const galleriesRoute = Router();

galleriesRoute.get('/', (req, res) => {
  getList(req, res);
});

galleriesRoute.patch('/like', (req, res) => {
  addLike(req, res);
});
