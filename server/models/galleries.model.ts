import { model, Schema } from 'mongoose';

interface IGalleries {
  images: [string];
  likes: number;
}

const galleriesSchema = new Schema<IGalleries>({
  images: { type: [String], required: true },
  likes: { type: Number, required: true },
});

export const Galleries = model<IGalleries>('galleries', galleriesSchema);
