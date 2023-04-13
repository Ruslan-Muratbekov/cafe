import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';

type Verify = {
  phone_number: string;
  code: string | boolean;
  is_approved: boolean;
};

const LogInByWhatsapp = () => {
  const Api3 = 'http://back.imenu.kg/api/v1/auth/verify_by_whatsapp/check/';
  const saved = JSON.parse(localStorage.getItem('phone_number') || '');

  const [navigate, setNavigate] = useState(false);
  let Navigates = useNavigate();

  const { register, handleSubmit, reset } = useForm<Verify>();
  const postInputValue: SubmitHandler<Verify> = (data) => {
    fetch(Api3, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        phone_number: saved,
        code: data.code,
        is_approved: data.is_approved,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setNavigate(true);

    reset();
  };

  return (
    <>
      {navigate ? Navigates('/login') : null}
      <form onSubmit={handleSubmit(postInputValue)} className="LogInByWhatsapp">
        <div className="LoginAdress_title">Мы вам отправили код на ваш Whatsapp</div>
        <input {...register('code', { required: true })} type="text" placeholder="Введите код:" />
        <div></div>
        <button type="submit" className="DeliveryRegistration__registor_btn1">
          Подтвердить
        </button>
        {/* <div className="LogInByWhatsapp_resendPswd">Отправить код заново</div> */}
      </form>
    </>
  );
};

export default LogInByWhatsapp;
