import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>
        <p>layout header</p>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <footer>
        <p>layout footer</p>
      </footer>
    </div>
  );
};
