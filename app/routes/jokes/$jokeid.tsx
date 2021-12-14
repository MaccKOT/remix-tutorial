// Dynamic route /jokes/[uuid]
//example: http://localhost:3000/jokes/b36e258b-2daf-4c0d-b4a4-403d76610ce3

import { LoaderFunction, useLoaderData, Link } from 'remix';
import { db } from '../../utils/db.server';
import type { Joke } from '@prisma/client';

type LoaderData = { joke: Joke };

export const loader: LoaderFunction = async ({ params }) => {
  const joke = await db.joke.findUnique({
    where: { id: params.jokeid },
  });
  if (!joke) throw new Error('Joke not found!');
  const data: LoaderData = { joke };
  return data;
};

export default function JokeRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here's your joke:</p>
      <p>{data.joke.content}</p>
      <Link to='.'>{data.joke.name} Permalink</Link>
    </div>
  );
}
