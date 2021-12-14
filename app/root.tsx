import { LiveReload } from 'remix'; // component for HMR
import { Outlet } from 'remix'; // component for routes usage
import { Links } from 'remix'; // links component (.css)
import type { LinksFunction } from 'remix'; // for global css typing

import globalStylesUrl from './styles/global.css';
import globalMediumStylesUrl from './styles/global-medium.css';
import globalLargeStylesUrl from './styles/global-large.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: globalStylesUrl,
  },
  {
    rel: 'stylesheet',
    href: globalMediumStylesUrl,
    media: 'print, (min-width: 640px)',
  },
  {
    rel: 'stylesheet',
    href: globalLargeStylesUrl,
    media: 'screen and (min-width: 1024px)',
  },
];

export default function App() {
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <title>Remix Jokes App</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
