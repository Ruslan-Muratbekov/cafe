import React from 'react';
import { selectCart } from '../redux/cart/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import FinishedOrders from '../components/finishedOrders';
import MainFooter from '../components/mainFooter';
import { Bil } from '../components/Bil';
import { MainBil } from '../components/mainBil';

const Orders = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : undefined;

  // let navigates = Navigate();

  if (token) {
    return (
      <div className="Orders">
        <div className="Orders__title">Мои заказы</div>
        <div className="Orders__inProgress">
          <div className="Orders__inProgress_orders">
            <div className="cart__bottom-details">
              <div className="cart__bottom-details-bil">
                <div className="FinishedOrders_date">
                  <div>12.09.2022</div>
                  <div>12:34</div>
                </div>
                {items.map((item: any) => (
                  <Bil key={item.id} {...item} name={item.name} price={item.price} />
                ))}
                <div className="MainBil_line"></div>
                <MainBil totalCount={totalPrice} />
                <div className="MainBil_thanks">Благодарим за заказ, и приятного аппетита</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="Orders__finished">
          <div className="Orders__finished_title">Выполненные</div>
          <div className="Orders__finished_orders">
            <FinishedOrders />
            <FinishedOrders />
          </div>
        </div> */}
        <div className="Orders__footer">
          <MainFooter />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navigate to="/login" replace={true} />;
      </div>
    );
  }
};

export default Orders;
