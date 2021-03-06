// root path /
import { Link } from 'remix';
import { LinksFunction } from 'remix';
import stylesUrl from '../styles/index.css';

// rendering <link href="/styles/index.css" rel="stylesheet">
export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: stylesUrl,
  },
];

export default function IndexRoute() {
  return (
    <div className='container'>
      <div className='content'>
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='jokes'>Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
