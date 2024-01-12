import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from '../Header/Header';
// import { Loader } from '../Loader/Loader';
import { Container } from '../../styles/GlobalStyles';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={null}>
        {/* <Suspense fallback={<Loader />}> */}
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};

export default SharedLayout;