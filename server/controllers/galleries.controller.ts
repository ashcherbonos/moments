import { Request, Response } from 'express';
import { Galleries } from '../models/galleries.model';

// Retrieve list of galleries starting from 'skip' with ammount of 'limit'.
export const getList = (req: Request, res: Response) => {
  const defaultSkip = 0;
  const defaultLimit = 10;

  const skip = (req.query.skip || defaultSkip) as number;
  const limit = (req.query.limit || defaultLimit) as number;

  Galleries.find({})
    .skip(skip)
    .limit(limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving galleries.',
      });
    });
};
