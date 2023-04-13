import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>Корзина пустая</h2>
    <p>
      Вероятней всего, вы не заказывали ещё еду .
      <br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <Link to="/" className="button button--black">
      <span>Продолжить заказ</span>
    </Link>
  </div>
);
