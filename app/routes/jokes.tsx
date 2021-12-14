import { Outlet } from 'remix'; // looking for jokes folder path

export default function JokesRoute() {
  return (
    <div>
      <h1>J🤣KES</h1>
      <Outlet />
    </div>
  );
}
