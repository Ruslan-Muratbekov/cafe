import React from 'react';
import { useSelector } from 'react-redux';

import { selectCart } from '../redux/cart/selectors';

import ContactsPhone from '../components/svg/ContactsPhone.svg';
import TelegramNum from '../components/svg/ContactsTellegram.svg';
import GmailNum from '../components/svg/ContactsGmail.svg';
import Location from '../components/svg/ContactsLocation.svg';
import MainFooter from '../components/mainFooter';

const Contacts = () => {
  const { items, totalPrice } = useSelector(selectCart);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <>
      <div className="Contacts">
        <div className="Contacts__title">Контакты</div>
        <button className="Contacts__questionBtn">По вопросам обращайтесь</button>
        <div className="Contacts__comunications">
          <button className="Contacts__comunications_phoneNum">
            <div className="phoneNum-title">
              <img src={ContactsPhone} alt="" />
              <div>Телефон:</div>
            </div>
            +996 500 420 888
          </button>
          <button className="Contacts__comunications_telegramNum">
            <div className="telegramNum-title">
              <img src={TelegramNum} alt="" />
              <div>Telegram:</div>
            </div>
            +996 500 420 888
          </button>
          <button className="Contacts__comunications_gmail">
            <div className="gmail-title">
              <img src={GmailNum} alt="" />
              <div>Gmail:</div>
            </div>
            +996 500 420 888
          </button>
          <button className="Contacts__comunications_location">
            <div className="location-title">
              <img src={Location} alt="" />
              <div>Местоположение:</div>
            </div>
            Ленина 312
          </button>
        </div>
      </div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            width="100%"
            scrolling="no"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ololo osh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
      <button className="OrderAmountBtn">
        <div>Заказов: {totalCount} с</div>
        <div>За: {totalPrice} с</div>
      </button>
      <div className="contact__footer">
        <MainFooter />
      </div>
    </>
  );
};

export default Contacts;
