import React from 'react';

const FinishedOrders = () => {
  return (
    <div className="FinishedOrders">
      <div className="FinishedOrders_date">
        <div>12.09.2022</div>
        <div>12:34</div>
      </div>
      <div className="FinishedOrders_foods">
        <div>Цезарь с курицей</div>
        <div>155 с</div>
      </div>
      <div className="FinishedOrders_foods">
        <div>Цезарь с курицей</div>
        <div>155 с</div>
      </div>
      <div className="FinishedOrders_foods">
        <div>Цезарь с курицей</div>
        <div>155 с</div>
      </div>
      <div className="FinishedOrders_foods">
        <div>Цезарь с курицей</div>
        <div>155 с</div>
      </div>
      <div className="FinishedOrders_line"></div>
      <button className="FinishedOrders_btn">
        <div>Итого</div>
        <div>456 с</div>
      </button>
      <div className="FinishedOrders_thanks">Благодарим за заказ, и приятного аппетита</div>
    </div>
  );
};

export default FinishedOrders;
