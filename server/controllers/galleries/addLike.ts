import { Request, Response } from 'express';
import { Galleries } from '../../models/galleries.model';

// add one like to the gallery
export const addLike = async (req: Request, res: Response) => {
  try {
    const id = req.query.id;
    if (!id) {
      res.status(404).send({
        message: `Gallery id not specified.`,
      });
      return;
    }

    const doc = await Galleries.findById(id);
    if (!doc) {
      res.status(404).send({
        message: `Cannot find Gallery with id=${id}.`,
      });
      return;
    }
    doc.likes++;
    await Galleries.findByIdAndUpdate(id, doc);
    res.send(doc.likes.toString());
  } catch (error) {
    let message = 'Some error occurred while updating Gallery.';
    if (error instanceof Error) {
      message = error.message || message;
    }
    res.status(500).send({ message });
  }
};
