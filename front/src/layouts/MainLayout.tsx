import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components';

const MainLayout: React.FC = () => {
  const [active, setActive] = React.useState(false);
  return (
    <>
      <Header active={active} setActive={setActive} />
      <div className="wrapper">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
