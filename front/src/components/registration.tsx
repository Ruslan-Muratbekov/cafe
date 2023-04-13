import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Error from './images/eroor.png';

type Inputs = {
  phone_number: string;
  password: string;
  password2: string;
  email: string;
  first_name: string;
  last_name: string;
  token: string;
  is_confirmed: boolean;
};

const Login = () => {
  const Api = 'http://back.imenu.kg/api/v1/auth/registretion/';
  const Api2 = 'http://back.imenu.kg/api/v1/auth/verify_by_whatsapp/';

  const [navigate, setNavigate] = useState(false);
  let Navigates = useNavigate();

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch(Api, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        phone_number: data.phone_number,
        password: data.password,
        password2: data.password2,
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        token: data.token,
        is_confirmed: (data.is_confirmed = true),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('token', JSON.stringify(data.token));
        console.log(data);
      });

    fetch(Api2, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        phone_number: data.phone_number,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(function (error) {
        console.log(error);
      });

    setNavigate(true);

    localStorage.setItem('phone_number', JSON.stringify(data.phone_number));
    reset();
  };

  return (
    <>
      {navigate ? Navigates('/login-by-whatsapp') : null}
      <div className="Login">
        <div className="Login_question">
          Уже есть аккаунт.
          <Link to="/login">
            <b> Войти</b>
          </Link>
        </div>
        <div className="Login_registration">
          <div className="Login_registration_title">Регистрация</div>
          <form className="Login_registration_inputs" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('phone_number', { required: true })}
              type="text"
              placeholder="Телефон:"
            />
            <input
              {...register('password', {
                required: true,
                minLength: { value: 8, message: 'Минимум 8 символов' },
              })}
              type="password"
              placeholder="Пароль:"
            />
            <input
              {...register('password2', {
                required: true,
                minLength: { value: 8, message: 'Минимум 8 символов' },
              })}
              type="password"
              placeholder="Подтверждите пароль:"
            />
            <input {...register('email', { required: true })} type="gmail" placeholder="email:" />
            <input {...register('first_name', { required: true })} type="text" placeholder="Имя:" />

            <input
              {...register('last_name', { required: true })}
              type="text"
              placeholder="Фамилия:"
            />
            {errors.password && (
              <span className="error">
                <img src={Error} alt="" />
                This fields are required!!!
              </span>
            )}
            <button type="submit" className="DeliveryRegistration__registor_btn1">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
