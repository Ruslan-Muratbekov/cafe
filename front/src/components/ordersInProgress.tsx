import React from 'react';

const OrdersInProgress = () => {
  return (
    <div className="OrdersInProgress">
      <div className="OrdersInProgress_date">
        <div>12.09.2022</div>
        <div>12:34</div>
      </div>
      <div className="OrdersInProgress_foods">
        <div>Цезарь с курицей</div>
        <div>155 с</div>
      </div>
      <div className="OrdersInProgress_foods">
        <div>Цезарь с курицей</div>
        <div>155 с</div>
      </div>
      <div className="OrdersInProgress_foods">
        <div>Цезарь с курицей</div>
        <div>155 с</div>
      </div>
      <div className="OrdersInProgress_foods">
        <div>Цезарь с курицей</div>
        <div>155 с</div>
      </div>
      <div className="OrdersInProgress_line"></div>
      <button className="OrdersInProgress_btn">
        <div>Итого</div>
        <div>456 с</div>
      </button>
      <div className="OrdersInProgress_thanks">Благодарим за заказ, и приятного аппетита</div>
    </div>
  );
};

export default OrdersInProgress;
