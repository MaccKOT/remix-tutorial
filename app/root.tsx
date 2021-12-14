import { LiveReload } from 'remix'; // component for HMR
import { Outlet } from 'remix'; // component for routes usage

export default function App() {
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <title>Remix Jokes App</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        <Outlet />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
