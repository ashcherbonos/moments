export interface IGalleries {
  _id: string;
  images: [string];
  likes: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchGalariesList = async (skip: number) => {
  const res = await fetch(
    // Here we will change the real request to an api to  the fake one, that will simulate very long (infinity) database:
    // (And because of this we will have one Lint warning)

    // `http://localhost:8000/api/galleries?skip=${skip}&limit=20`
    `http://localhost:8000/api/galleries?limit=20`
  );
  return (await res.json()) as IGalleries[];
};

export const addLike = async (id: string) => {
  const res = await fetch(`http://localhost:8000/api/galleries/like?id=${id}`, {
    method: 'PATCH',
  });
  return (await res.json()) as number;
};

export const getLike = async (id: string) => {
  const res = await fetch(`http://localhost:8000/api/galleries/like?id=${id}`);
  return (await res.json()) as number;
};
