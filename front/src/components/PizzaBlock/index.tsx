import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, selectCartItemCountById } from '../../redux/cart/selectors';
import { CartItem, CartItemMinus } from '../../redux/cart/types';
import { addItem, minusItemDish } from '../../redux/cart/slice';
import PriceIcon from '../svg/price.svg';
import CartIcon from '../../assets/img/cart.svg';

// import notFoundImage from '../../assets/img/404.jpeg';

type PizzaBlockProps = {
  id: string;
  name: string;
  image: string;
  sizes: any[];
  rating: number;
  description: any;
};

export const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, name, image, sizes, description }) => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(selectCartItemCountById(id));
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  const addedCount = cartItemCount ? cartItemCount : 1;

  const onClickMinus = () => {
    const itemMinus: CartItemMinus = {
      id: activeSize.id,
      cardId: id,
      name: name,
      price: activeSize?.price,
      image,
      size: activeSize.name,
      count: 1,
      description: description,
    };
    dispatch(minusItemDish(itemMinus));
  };

  const onClickAdd = () => {
    const item: CartItem = {
      id: activeSize.id,
      cardId: id,
      name: name,
      price: activeSize?.price,
      image,
      size: activeSize.name,
      count: 0,
      description: description,
    };
    dispatch(addItem(item));
  };

  const { items, totalPrice } = useSelector(selectCart);
  const isMountedd = React.useRef(false);

  const clickAdd = () => {
    const json = JSON.stringify(items);

    if (isMountedd.current) {
    }
    isMountedd.current = true;
    localStorage.setItem('cart', json);
  };

  return (
    <>
      <div className="pizza-block-wrapper">
        <div className="pizza-block">
          <div className="imag">
            {image ? <img className="pizza-block_leftImg__image" src={image} alt="" /> : null}
          </div>
          <div className="pizza-block_titles">
            <h4 className="pizza-block__title">{name}</h4>
            <h3 className="pizza-block__description">{description}</h3>
            <div className="pizza-block__selector">
              <ul>
                {sizes
                  .filter((size) => size.isActive === true)
                  .map((size, i) => (
                    <li
                      key={i}
                      onClick={() => setActiveSize(size)}
                      className={activeSize.id === size.id ? 'active' : ''}>
                      {size.name}
                    </li>
                  ))}
              </ul>
            </div>

            {activeSize ? (
              <div className="pizza-block__bottom">
                <button className="add_btn">
                  <button disabled={addedCount === 1} onClick={onClickMinus}>
                    <svg
                      width="18"
                      height="5"
                      viewBox="0 0 18 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 1H1H17Z" fill="white" />
                      <path d="M17 1H1" stroke="#FF7010" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  {addedCount > 0 && <i>{addedCount + ' шт'}</i>}
                  <svg
                    onClick={onClickAdd}
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.87044 0.00747787L10 0C10.5698 0 11.0394 0.428933 11.1037 0.981533L11.1111 1.11111V8.88889H18.8889C19.4587 8.88889 19.9283 9.31778 19.9926 9.87044L20 10C20 10.5698 19.5711 11.0394 19.0184 11.1037L18.8889 11.1111H11.1111V18.8889C11.1111 19.4587 10.6822 19.9283 10.1296 19.9926L10 20C9.43022 20 8.96056 19.5711 8.89633 19.0184L8.88889 18.8889V11.1111H1.11111C0.541289 11.1111 0.0716556 10.6822 0.00747787 10.1296L0 10C0 9.43022 0.428933 8.96056 0.981533 8.89633L1.11111 8.88889H8.88889V1.11111C8.88889 0.541289 9.31778 0.0716556 9.87044 0.00747787Z"
                      fill="#FF7010"
                    />
                  </svg>
                </button>
                <div className="pizza-block__selector2">
                  <div className="pizza-block__price">
                    {activeSize.price} <img src={PriceIcon} alt="" />
                  </div>

                  <button className="pizza-block__bottom_btn" onClick={clickAdd}>
                    <button>
                      <img src={CartIcon} alt="" />
                    </button>
                    В корзину
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {/* <InfoAboutFood foodInfo={foodInfo} setFoodInfo={setFoodInfo} /> */}
      </div>
    </>
  );
};
