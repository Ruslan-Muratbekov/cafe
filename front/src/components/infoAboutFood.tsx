import React, { SetStateAction } from 'react';

import InfoIcon from './svg/info.svg';

interface InfoProp {
  foodInfo: boolean;
  setFoodInfo: React.Dispatch<SetStateAction<boolean>>;
}

const InfoAboutFood = ({ foodInfo, setFoodInfo }: InfoProp) => {
  return (
    <div className={foodInfo ? 'InfoAboutFood' : 'none'}>
      <div className="InfoAboutFood_title">
        {' '}
        <img src={InfoIcon} alt="" /> Информация о блюде
      </div>
      <div className="InfoAboutFood_subtitle">
        Салат из маринованного, обжаренного и нарезанного ломтиками куриного филе с гренками и
        тертым сыром.
      </div>
    </div>
  );
};

export default InfoAboutFood;
