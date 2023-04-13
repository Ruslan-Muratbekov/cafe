import React from 'react';
import '../scss/components/_bil.scss';

type TotalBtn = {
  totalCount: number;
};

export const MainBil: React.FC<TotalBtn> = ({ totalCount }) => {
  return (
    <button className="MainBil_btn">
      <div>Итого</div>
      <div>{totalCount} с</div>
    </button>
  );
};
