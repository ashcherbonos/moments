export interface IGalleries {
  _id: string;
  images: [string];
  likes: number;
}

export const fetchGalariesList = async () => {
  const res = await fetch('http://localhost:8000/api/galleries');
  return (await res.json()) as IGalleries[];
};

export const addLike = async (id: string) => {
  const res = await fetch(`http://localhost:8000/api/galleries/like?id=${id}`, {
    method: 'PATCH',
  });
  return (await res.json()) as IGalleries[];
};
