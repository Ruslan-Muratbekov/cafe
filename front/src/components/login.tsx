import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, Link, Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../redux/cities/hooks';
import { loginProfile } from '../redux/profile/index';

import Error from './images/eroor.png';

type Inputs = {
  password: string;
  phone_number: string;
  token: string;
};

const LoginAdress = () => {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state);
  const token = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token') || '')
    : undefined;

  const [navigate, setNavigate] = useState(false);
  let Navigates = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      loginProfile({
        ...data,
      }),
    );
    if (profile.error && token) {
      setNavigate(true);
    }
    reset();
  };

  if (navigate) {
    Navigates('/');
  }
  if (!token) {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="LoginAdress">
          <div className="LoginAdress_title">Войти</div>
          <input
            type="text"
            placeholder="Телефон:"
            {...register('phone_number', { required: true })}
          />
          <input
            type="password"
            placeholder="Пароль:"
            {...register('password', { required: true })}
          />
          {profile.error && (
            <span className="error">
              <img src={Error} alt="" />
              {profile.error?.detail}
            </span>
          )}
          <button type="submit" className="LoginAdress-btn">
            Войти
          </button>
        </form>
        <Link to="/registration">
          <button className="DeliveryRegistration__registor_btn1">Зарегистрироваться</button>
        </Link>
      </>
    );
  } else {
    return (
      <div>
        <Navigate replace to="/" />
      </div>
    );
  }
};

export default LoginAdress;
