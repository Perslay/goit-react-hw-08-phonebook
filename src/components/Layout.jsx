import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';
// import { selectIsLoading } from '../redux/selectors';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  // const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
