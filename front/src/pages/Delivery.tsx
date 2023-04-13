import React from 'react';

import Person from '../components/svg/DeliveryPer.svg';
import Union from '../components/svg/DeliveryUnion.svg';
import Cercle from '../components/svg/DeliverySub.svg';
import Vector from '../components/svg/DeliveryVec1.svg';
import MainFooter from '../components/mainFooter';

const Delivery = () => {
  return (
    <div className="Delivery">
      <div className="Delivery__title">Доставка</div>
      <div className="Delivery__images">
        <img className="Union" src={Union} alt="" />
        <img className="Cercle" src={Cercle} alt="" />
        <img className="Person" src={Person} alt="" />
        <img className="Vector" src={Vector} alt="" />
      </div>
      <div className="Delivery__boxes">
        <div className="Delivery__boxes_del">
          <div className="Delivery__boxes_del-title">Доставляем</div>
          <div className="Delivery__boxes_del-subTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus voluptas labore
            minima deleniti animi, vitae quis nostrum possimus aut. Laudantium in sint
            reprehenderit, beatae error repudiandae officiis soluta cupiditate.
          </div>
        </div>
        <div className="Delivery__boxes_about">
          <div className="Delivery__boxes_about-title">Доставляем</div>
          <div className="Delivery__boxes_about-subTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus voluptas labore
            minima deleniti animi, vitae quis nostrum possimus aut. Laudantium in sint
            reprehenderit, beatae error repudiandae officiis soluta cupiditate.
          </div>
        </div>
        <div className="Delivery__boxes_order">
          <div className="Delivery__boxes_order-title">Доставляем</div>
          <div className="Delivery__boxes_order-subTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus voluptas labore
            minima deleniti animi, vitae quis nostrum possimus aut. Laudantium in sint
            reprehenderit, beatae error repudiandae officiis soluta cupiditate.
          </div>
        </div>
      </div>
      <div className="del__footer">
        <MainFooter />
      </div>
    </div>
  );
};

export default Delivery;
