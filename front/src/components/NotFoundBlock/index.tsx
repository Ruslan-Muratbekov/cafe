import React from 'react';

import styles from './NotFoundBlock.module.scss';
import NotFoundImage from '../svg/notFound.svg';
import { Link } from 'react-router-dom';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <img src={NotFoundImage} alt="" />
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалени данная страница отсутствует в нашем интернет-магазине
      </p>
      <Link to="/">
        <button>Вернуться в главное меню</button>
      </Link>
    </div>
  );
};
