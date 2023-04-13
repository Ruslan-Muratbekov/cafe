import React from 'react';
import { Link } from 'react-router-dom';

import Facebook from './svg/facebook.svg';
import YouTube from './svg/youTube.svg';
import Instagram from './svg/instagram.svg';
import Whatsaap from './svg/whatsapp.svg';
import Telegram from './svg/telegram.svg';

const MainFooter = () => {
  const [activeBtn, setActiveBtn] = React.useState<any>(false);
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : undefined;

  return (
    <>
      <div className="MainFooter">
        <div className="nav">
          <Link to="/">
            <div className="nav_bar">Меню</div>
          </Link>
          <Link to="contacts">
            <div className="nav_bar">Контакты</div>
          </Link>
          <Link to="delivery">
            <div className="nav_bar">Доставка</div>
          </Link>
          <Link to="about">
            <div className="nav_bar">Про нас</div>
          </Link>
          {token ? (
            <Link to="profile">
              <div className="nav_bar">Профиль</div>
            </Link>
          ) : (
            ''
          )}
        </div>
        <div className="MainFooter__privicy">
          <div className="MainFooter__privicy_logo">iMenu</div>
          <div className="MainFooter__privicy_contactBtns">
            <button>
              <img src={Facebook} alt="" />
            </button>
            <button>
              <img src={YouTube} alt="" />
            </button>
            <button>
              <img src={Instagram} alt="" />
            </button>
            <button>
              <img src={Whatsaap} alt="" />
            </button>
            <button>
              <img src={Telegram} alt="" />
            </button>
          </div>
          <div className="footer__privicy">
            © {new Date().getFullYear()} iMenu. Все права защищены.
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
