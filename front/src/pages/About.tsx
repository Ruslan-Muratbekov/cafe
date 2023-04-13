import React from 'react';
import { useSelector } from 'react-redux';

import MainFooter from '../components/mainFooter';
// import { Categories } from '../components/Categories';
import { selectCart } from '../redux/cart/selectors';

import Person1 from '../components/images/AboutPer1.png';
import Vector1 from '../components/svg/AboutVec1.svg';
import Icon1 from '../components/svg/AboutIco1.svg';
import Person2 from '../components/images/AboutPer2.png';
import Vector2 from '../components/svg/AboutVec2.svg';
import Icon2 from '../components/svg/AboutIco2.svg';
import Icon3 from '../components/svg/AboutIco3.svg';
import Person3 from '../components/images/AboutPer3.png';
import Vector3 from '../components/svg/AboutVec3.svg';
import Icon4 from '../components/svg/AboutIco4.svg';
import Icon5 from '../components/svg/AboutIco5.svg';
import Person4 from '../components/images/AboutPer4.png';
import Vector4 from '../components/svg/AboutVec4.svg';
import Icon6 from '../components/svg/AboutIco6.svg';
import Icon7 from '../components/svg/AboutIco7.svg';
import Person5 from '../components/images/AboutPer5.png';

import Aboutmobi from '../components/images/aboutmobi.png';

const About = () => {
  const { items, totalPrice } = useSelector(selectCart);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <>
      <div className="About">
        <div className="About__title">Про нас</div>
        <div className="About__images">
          <img className="Person1" src={Person1} alt="" />
          <img className="Vector1" src={Vector1} alt="" />
          <img className="Icon1" src={Icon1} alt="" />
          <img className="Person2" src={Person2} alt="" />
          <img className="Vector2" src={Vector2} alt="" />
          <img className="Icon2" src={Icon2} alt="" />
          <img className="Icon3" src={Icon3} alt="" />
          <img className="Person3" src={Person3} alt="" />
          <img className="Icon4" src={Icon4} alt="" />
          <img className="Vector3" src={Vector3} alt="" />
          <img className="Icon5" src={Icon5} alt="" />
          <img className="Person4" src={Person4} alt="" />
          <img className="Vector4" src={Vector4} alt="" />
          <img className="Icon6" src={Icon6} alt="" />
          <img className="Icon7" src={Icon7} alt="" />
          <img className="Person5" src={Person5} alt="" />
        </div>
        <div className="About__staff">
          <div className="About__staff_staff">
            <div className="About__staff_staff-title">Наша команда</div>
            <div className="About__staff_staff-subTitle">
              <div>Рассказать о команде, их имена, должности, опытность и квалификация. </div>
              <div>Рассказать о команде, их имена, должности, опытность и квалификация. </div>
              <div>Рассказать о команде, их имена, должности, опытность и квалификация. </div>
              <div>Рассказать о команде, их имена, должности, опытность и квалификация. </div>
            </div>
          </div>
          <div className="About__staff_benefits">
            <div className="About__staff_benefits-title">Преимущества среди других</div>
            <div className="About__staff_benefits-subTitle">
              <div>
                Рассказать о преимуществах среди других игроков. может быть у вас особенная кухня,
                возможно повара от известных Вузов или ресторанов.
              </div>
              <div>
                может быть у вас особенная кухня, возможно повара от известных Вузов или ресторанов.
              </div>
              <div>
                реимущества здания, его декорация, дизайн или обслуживание на высшем уровне.{' '}
              </div>
            </div>
          </div>
          <div className="About__staff_aboutUs">
            <div className="About__staff_aboutUs-title">Про нас</div>
            <div className="About__staff_aboutUs-subTitle">
              <div>
                Рассказать о преимуществах среди других игроков. может быть у вас особенная кухня,
                возможно повара от известных Вузов или ресторанов.
              </div>
              <div>
                может быть у вас особенная кухня, возможно повара от известных Вузов или ресторанов.
              </div>
              <div>
                реимущества здания, его декорация, дизайн или обслуживание на высшем уровне.{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerA">
        <MainFooter />
      </div>
      <div className="AboutMobi">
        {/* <Categories /> */}
        <div className="AboutMobi_title">про нас</div>
        <div className="AboutMobi_blocks">
          <div className="AboutMobi_blocks_block">
            <img src={Aboutmobi} alt="" />
            <div className="AboutMobi_blocks_block_title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae corrupti tempore
              consequuntur eum suscipit necessitatibus magni accusamus minus. Tempora laudantium nam
              a sunt facilis? Ipsam quis ex ut enim excepturi.
            </div>
          </div>
          <div className="AboutMobi_blocks_block">
            <img src={Aboutmobi} alt="" />
            <div className="AboutMobi_blocks_block_title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae corrupti tempore
              consequuntur eum suscipit necessitatibus magni accusamus minus. Tempora laudantium nam
              a sunt facilis? Ipsam quis ex ut enim excepturi.
            </div>
          </div>
        </div>
        <button className="OrderAmountBtn">
          <div>Заказов: {totalCount} с</div>
          <div>За: {totalPrice} с</div>
        </button>
      </div>
    </>
  );
};

export default About;
