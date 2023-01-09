export interface IGalleries {
  _id: string;
  title: string;
  images: [string];
  likes: number;
}

const ServerHost = 'https://ashcherbonos-moments.azurewebsites.net';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchGalariesList = async (skip: number) => {
  const res = await fetch(
    // Here we will change the real request to an api to  the fake one, that will simulate very long (infinity) database:
    // (And because of this we will have one Lint warning)

    // `${ServerHost}/api/galleries?skip=${skip}&limit=20`
    `${ServerHost}/api/galleries?limit=20`
  );
  return (await res.json()) as IGalleries[];
};

export const addLike = async (id: string) => {
  const res = await fetch(`${ServerHost}/api/galleries/like?id=${id}`, {
    method: 'PATCH',
  });
  return (await res.json()) as number;
};

export const getLike = async (id: string) => {
  const res = await fetch(`${ServerHost}/api/galleries/like?id=${id}`);
  return (await res.json()) as number;
};
