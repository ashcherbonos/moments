import { Router } from 'express';
import { addLike, getGalleriesList, getLikes } from '../controllers/galleries';

export const galleriesRoute = Router();

galleriesRoute.get('/', (req, res) => {
  getGalleriesList(req, res);
});

galleriesRoute.get('/like', (req, res) => {
  getLikes(req, res);
});

galleriesRoute.patch('/like', (req, res) => {
  addLike(req, res);
});
