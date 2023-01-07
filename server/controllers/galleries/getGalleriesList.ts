import { Request, Response } from 'express';
import { Galleries } from '../../models/galleries.model';

// Retrieve list of galleries starting from 'skip' with ammount of 'limit'.
export const getGalleriesList = async (req: Request, res: Response) => {
  try {
    const defaultSkip = 0;
    const defaultLimit = 10;

    const skip = (req.query.skip || defaultSkip) as number;
    const limit = (req.query.limit || defaultLimit) as number;

    const docs = await Galleries.find({}).skip(skip).limit(limit);

    if (!docs) {
      res.status(404).send({
        message: `Cannot find any Galleries`,
      });
      return;
    }
    res.send(docs);
  } catch (error) {
    let message = 'Some error occurred while retrieving Galleries';
    if (error instanceof Error) {
      message = error.message || message;
    }
    res.status(500).send({ message });
  }
};
