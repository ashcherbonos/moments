import { model, Schema } from 'mongoose';

interface IGalleries {
  id: string;
  title: string;
  images: [string];
  likes: number;
}

const galleriesSchema = new Schema<IGalleries>({
  title: { type: String, required: true },
  images: { type: [String], required: true },
  likes: { type: Number, required: true },
});

export const Galleries = model<IGalleries>('galleries', galleriesSchema);
