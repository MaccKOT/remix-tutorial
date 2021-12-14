import { Outlet, Link, LoaderFunction, useLoaderData } from 'remix'; // looking for jokes folder path
import type { LinksFunction } from 'remix';
import stylesUrl from '../styles/jokes.css';
import { db } from '../utils/db.server';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ];
};

type loaderData = {
  jokeListItems: {
    id: string;
    name: string;
  }[];
};

// loader for fetching data
export const loader: LoaderFunction = async () => {
  const data: loaderData = {
    jokeListItems: await db.joke.findMany({
      take: 5, // take only 5 items
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    }),
  };
  return data;
};

export default function JokesRoute() {
  const data = useLoaderData<loaderData>();

  return (
    <div className='jokes-layout'>
      <header className='jokes-header'>
        <div className='container'>
          <h1 className='home-link'>
            <Link to='/' title='Remix Jokes' aria-label='Remix Jokes'>
              <span className='logo'>🤪</span>
              <span className='logo-medium'>J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className='jokes-main'>
        <div className='container'>
          <div className='jokes-list'>
            <Link to='.'>Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              {data.jokeListItems.map((joke) => (
                <li key={joke.id}>
                  <Link to={joke.id}>{joke.name}</Link>
                </li>
              ))}
            </ul>
            <Link to='new' className='button'>
              Add your own
            </Link>
          </div>
          <div className='jokes-outlet'>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
