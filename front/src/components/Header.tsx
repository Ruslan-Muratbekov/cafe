import React, { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderRes from './headerRes';

import Hamburger from './svg/hamburger.svg';
import { Search } from './';

interface Props {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ active, setActive }) => {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : undefined;
  const [activeBtn, setActiveBtn] = useState<any>(1);

  const handleClick = (index: any) => {
    setActiveBtn(index);
  };
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__inner">
            <div className="navbar">
              <Link to="/">
                <div className="logo_text">iMenu</div>
              </Link>
              <div className="nav">
                <Link to="/">
                  <div
                    className={activeBtn === 1 ? 'nav_bar active' : 'nav_bar'}
                    onClick={() => handleClick(1)}>
                    Меню
                  </div>
                </Link>
                <Link to="contacts">
                  <div
                    className={activeBtn === 2 ? 'nav_bar active' : 'nav_bar'}
                    onClick={() => handleClick(2)}>
                    Контакты
                  </div>
                </Link>
                <Link to="delivery">
                  <div
                    className={activeBtn === 3 ? 'nav_bar active' : 'nav_bar'}
                    onClick={() => handleClick(3)}>
                    Доставка
                  </div>
                </Link>
                <Link to="about">
                  <div
                    className={activeBtn === 5 ? 'nav_bar active' : 'nav_bar'}
                    onClick={() => handleClick(5)}>
                    Про нас
                  </div>
                </Link>
                {token ? (
                  <Link to="profile">
                    <div
                      className={activeBtn === 4 ? 'nav_bar active' : 'nav_bar'}
                      onClick={() => handleClick(4)}>
                      Профиль
                    </div>
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </div>
            <Link to="orders">
              <div className="header_btn">Мои заказы</div>
            </Link>
          </div>
          <div className="burger">
            {/* <Search /> */}
            <Link to="/">
              <div className="burger_logo">iMenu</div>
            </Link>
            <img onClick={() => setActive(!active)} src={Hamburger} alt="" />
          </div>
          <HeaderRes active={active} setActive={setActive} />
        </div>
      </div>
    </>
  );
};
