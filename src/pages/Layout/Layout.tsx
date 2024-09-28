import { Outlet } from 'react-router-dom';
import { Header } from 'src/components';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
