import React, { SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import NavigationClose from './svg/NavigationClose.svg';

interface Props {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const HeaderResponse = ({ active, setActive }: Props) => {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : undefined;

  return (
    <div className={active ? 'HeaderResponse' : 'none'}>
      <div className="HeaderResponse__content">
        <img
          onClick={() => setActive(false)}
          className="HeaderResponse__content_close"
          src={NavigationClose}
          alt=""
        />
        <ul className="HeaderResponse__content_nav">
          <Link to="/">
            <div onClick={() => setActive(false)} className="nav_bar">
              Все блюда
            </div>
          </Link>
          <Link to="/about">
            <div onClick={() => setActive(false)} className="nav_bar">
              Про нас
            </div>
          </Link>
          <Link to="delivery">
            <div onClick={() => setActive(false)} className="nav_bar">
              Доставка
            </div>
          </Link>
          <Link to="contacts">
            <div onClick={() => setActive(false)} className="nav_bar">
              Контакты
            </div>
          </Link>
          {token ? (
            <Link to="profile">
              <div className="nav_bar">Профиль</div>
            </Link>
          ) : (
            ''
          )}
          <Link to="orders">
            <div onClick={() => setActive(false)} className="nav_bar">
              Мои Заказы
            </div>
          </Link>
        </ul>
        <Link to="/login">
          <button className="HeaderResponse__content_btn">Войти</button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderResponse;
