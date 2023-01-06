import { model, Schema } from 'mongoose';

interface IGalleries {
  titleImage: string;
  images: [string];
}

const galleriesSchema = new Schema<IGalleries>({
  titleImage: { type: String, required: true },
  images: { type: [String], required: true },
});

export const Galleries = model<IGalleries>('galleries', galleriesSchema);
