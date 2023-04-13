import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/components/_confirmedOrder.scss';

import ConfirmImg from '../components/images/confirmImg.png';
import MainFooter from './mainFooter';

const ConfirmedOrder = () => {
  return (
    <>
      <div className="ConfirmedOrder">
        <div className="ConfirmedOrder_orderNumber">Заказ №31 принят</div>
        <div className="ConfirmedOrder_thanks">
          Спасибо за заказ! Вам доставят ваш заказ как можно скорее{' '}
        </div>
        <img src={ConfirmImg} alt="" />
        <Link to="/">
          <button className="ConfirmedOrder_btn">Вернуться в меню</button>
        </Link>
      </div>
      <div className="footer">
        <MainFooter />
      </div>
    </>
  );
};

export default ConfirmedOrder;
