import React from 'react';
import '../scss/components/_bil.scss';

type BillProps = {
  name: string;
  price: string;
};

export const Bil: React.FC<BillProps> = ({ name, price }) => {
  return (
    // <div className="Bil">
    //   <div className="Bil_date">Ваш чек</div>
    <>
      <div className="Bil_foods">
        <div>{name}</div>
        <div>{price + ' '}с</div>
      </div>
      {/* <div className="Bil_line"></div> */}
    </>
    //   <button className="Bil_btn">
    //     <div>Итого</div>
    //     <div>456 с</div>
    //   </button>
    //   <div className="Bil_thanks">Благодарим за заказ, и приятного аппетита</div>
    // </div>
  );
};
