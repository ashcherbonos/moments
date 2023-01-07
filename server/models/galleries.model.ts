import { model, Schema } from 'mongoose';

interface IGalleries {
  id: string;
  images: [string];
  likes: number;
}

const galleriesSchema = new Schema<IGalleries>({
  images: { type: [String], required: true },
  likes: { type: Number, required: true },
});

galleriesSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export const Galleries = model<IGalleries>('galleries', galleriesSchema);
