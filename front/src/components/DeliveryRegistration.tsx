import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import CreatableSelect, { useCreatable } from 'react-select/creatable';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { useAppSelector, useAppDispatch } from '../redux/cities/hooks';
import { selectCart } from '../redux/cart/selectors';
import { fetchCities } from '../redux/cities/cities';

// import DeliverRegArrow from '../components/svg/deliverRegArrow.svg';
// import DeliveryRegData from '../components/svg/DeliveryRegData.svg';
import Error from './images/eroor.png';
import RegistrationImg from '../components/images/registration.png';

import MainFooter from './mainFooter';

type DeliveryInputs = {
  phone_number: string;
  city: any;
  address: string;
  message: string;
  item_carts: object;
  id: number;
  title: any;
};

const DeliveryRegistration = () => {
  const MAIN_URL = 'http://back.imenu.kg/api/v1/carts/create/';
  const { totalPrice, items } = useSelector(selectCart);

  const [navigate, setNavigate] = useState(false);
  let navigates = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    control,

    formState: { errors, isValid },
  } = useForm<DeliveryInputs>({
    mode: 'onBlur',
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  // fetch data from our store
  const { cities } = useAppSelector((state) => state);

  const savedFoods = JSON.parse(localStorage.getItem('cart') || '');

  const onSubmit: SubmitHandler<DeliveryInputs> = async (data) => {
    let form: object = {
      phone_number: data.phone_number,
      city: data.city.id,
      address: data.address,
      message: data.message,
      item_carts: savedFoods.map((item: any) => {
        return {
          food: item.id,
          quantity: item.count,
        };
      }),
    };

    // console.log(form);
    await axios
      .post(MAIN_URL, form)
      .then((res) => console.log(res))
      .catch(function (error) {
        console.log(error);
      });
    setNavigate(true);

    reset();
  };

  const options = [
    { value: '01:00', label: '01:00' },
    { value: '02:00', label: '02:00' },
    { value: '03:00', label: '03:00' },
    { value: '04:00', label: '04:00' },
    { value: '05:00', label: '05:00' },
    { value: '06:00', label: '06:00' },
    { value: '07:00', label: '07:00' },
  ];

  const [activeMap, setActivemap] = React.useState(false);
  return (
    <>
      {navigate ? navigates('/confirm') : null}

      <div className="DeliveryRegistration">
        <form className="DeliveryRegistration_inner" onSubmit={handleSubmit(onSubmit)}>
          <div className="DeliveryRegistration_inner__title">Доставка</div>
          <div className="DeliveryRegistration_inner__mobiletitle">Куда</div>
          <div className="DeliveryRegistration_inner__registration">
            <div>Телефон:</div>
            <input
              {...register('phone_number', { required: true })}
              type="text"
              placeholder="+996:"
            />
            {errors.phone_number && (
              <span className="error2">
                <img src={Error} alt="" />
                This fields are required!!!
              </span>
            )}
          </div>
          <div className="DeliveryRegistration_inner__registration-city">
            <div className="DeliveryRegistration_inner__registration-city--title">
              Выберите город:
            </div>
            <div className="Cities">
              <Controller
                name="city"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <CreatableSelect
                    {...field}
                    isClearable
                    isDisabled={cities.loading}
                    isLoading={cities.loading}
                    options={cities?.data?.results}
                    placeholder={<div>Выберите или создайте...</div>}
                    formatCreateLabel={(userInput) => `Создать: ${userInput}`}
                    // onChange={handleCityChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="DeliveryRegistration_inner__registration">
            <div className="select">
              <div>Адрес:</div>
              <input
                {...register('address', { required: true })}
                type="text"
                placeholder="Ваш адресс:"
              />
              <button
                className="onMap"
                onClick={() => {
                  setActivemap(!activeMap);
                }}>
                На карте
              </button>
            </div>
          </div>
          {/* <div className="DeliveryRegistration_inner__registration">
            <div>Номер вашего дома:</div>
            <input type="text" placeholder="Введите номер квратиры и этаж:" />
          </div> */}
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                scrolling="no"
                src="https://maps.google.com/maps?width=628&amp;height=224&amp;hl=en&amp;q=ololo osh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </div>
          <div className="DeliveryRegistration_inner__payment">
            <div className="DeliveryRegistration_inner__payment_title">Когда выполнить заказ?</div>
            <div className="DeliveryRegistration_inner__payment_checkboxes">
              <label className="switch">
                <input disabled={true} type="checkbox" />
                <span className="check"></span>
                <span className="switch_title">Как можно скорее</span>
              </label>

              <label className="time">
                <input disabled={true} type="checkbox" />
                <span className="timeSwitch"></span>
                <span className="time_title">По времени</span>
              </label>
              {/* <div className="DeliveryRegistration_inner__date">
                <div>Дата</div>
                <img src={DeliveryRegData} alt="" />
              </div>
              <Select options={options} /> */}
            </div>
            <div className="DeliveryRegistration_inner__type">
              <div className="DeliveryRegistration_inner__type_title">Оплата</div>
              <div className="cash">
                <label className="cash_byCash">
                  <input disabled={true} type="checkbox" />
                  <span className="cash_byCash_switch"></span>
                  <span className="cash_byCash_title">Наличными</span>
                </label>
                <label className="cash_byCard">
                  <input disabled={true} type="checkbox" />
                  <span className="cash_byCard_switch"></span>
                  <span className="cash_byCard_title">Картой</span>
                </label>
              </div>
              <div className="DeliveryRegistration_inner__type_inputs">
                <input
                  className="DeliveryRegistration_inner__type_inputs-input1"
                  type="text"
                  placeholder="Сдача с:"
                />
                <input
                  className="DeliveryRegistration_inner__type_inputs-input2"
                  type="text"
                  placeholder="Номер карты:"
                />
              </div>
              <div className="DeliveryRegistration_inner__type_comments">
                <div className="DeliveryRegistration_inner__type_comments-title">Коментарий</div>
                <textarea
                  className="DeliveryRegistration_inner__type_comments-area"
                  placeholder="Есть уточнения?"
                  {...register('message')}></textarea>
              </div>
              <div className="DeliveryRegistration_inner__type_total">
                <div className="DeliveryRegistration_inner__type_total-title">
                  Итого: {totalPrice} c
                </div>
                <button type="submit" className="DeliveryRegistration_inner__type_total-btn">
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
          <div className="DeliveryRegistration_inner__payMobi">
            <div className="DeliveryRegistration_inner__payMobi_type">
              <div className="DeliveryRegistration_inner__payMobi_type-title">Оплата</div>
              <button disabled={true} className="DeliveryRegistration_inner__payMobi_type-btn1">
                Наличными
              </button>
              <button disabled={true} className="DeliveryRegistration_inner__payMobi_type-btn2">
                Картой
              </button>
            </div>
            <input
              className="DeliveryRegistration_inner__payMobi-input"
              type="text"
              placeholder="Сдача от:"
            />
            <div className="DeliveryRegistration_inner__payMobi_type">
              <div className="DeliveryRegistration_inner__payMobi_type-title">Доставка</div>
              <button disabled={true} className="DeliveryRegistration_inner__payMobi_type-btn1">
                Как можно <br /> скорее
              </button>
              <button disabled={true} className="DeliveryRegistration_inner__payMobi_type-btn2">
                В другое <br /> время
              </button>
            </div>
            <div className="DeliveryRegistration_inner__payMobi_comments">
              <div className="DeliveryRegistration_inner__payMobi_comments-title">
                Коментарий к заказу
              </div>

              <textarea
                className="DeliveryRegistration_inner__type_comments-area2"
                placeholder="Есть уточнения?"
                {...register('message')}></textarea>
            </div>
            <button type="submit" className="OrderAmountBtn2">
              Подтвердить
            </button>
          </div>
        </form>
        <div className="DeliveryRegistration__registor">
          <img src={RegistrationImg} alt="" />
          <div className="DeliveryRegistration__registor_title">
            Зарегистрируйтесь для автоматизации вашей доставки
          </div>
          <div className="DeliveryRegistration__registor_subtitle">
            Зарегистрируйтесь чтобы мы заранее знали ваше куда доставлять заказ и вы могли за более
            короткое время заказать и сократить время доставки. Все ваши данные будут сохранены ради
            удобства доставки и улучшения нашего сервиса
          </div>
          <Link to="/registration">
            <button className="DeliveryRegistration__registor_btn1">Зарегистрироваться</button>
          </Link>
        </div>
      </div>
      {/* {activeMap ? <DelMap activeMap={activeMap} setActivemap={setActivemap} /> : null} */}

      <div className="reg_footer">
        <MainFooter />
      </div>
    </>
  );
};

export default DeliveryRegistration;
