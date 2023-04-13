import React, { SetStateAction } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppSelector } from '../../redux/cities/hooks';

import { editProfile, editPassword } from '../../redux/profile/index';
import { useAppDispatch } from '../../redux/store';
import '../../scss/components/_edit.scss';

import UserIcon from '../svg/user.svg';
import Error from '../images/eroor.png';

interface Props {
  setIsEdit: React.Dispatch<SetStateAction<boolean>>;
  items: any;
}

type EditInputs = {
  email: string;
  first_name: string;
  last_name: string;
  old_password: any;
  password: any;
  password2: any;
};

const Edit = ({ setIsEdit, items }: Props) => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<EditInputs>({
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<EditInputs> = async (data) => {
    console.log(data);

    dispatch(
      editPassword(
        {
          old_password: data.old_password,
          password: data.password,
          password2: data.password2,
        },
        setIsEdit,
      ),
    );

    dispatch(
      editProfile(
        {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
        },
        setIsEdit,
      ),
    );
  };

  return (
    <div className="ProfileEdit">
      <div className="ProfileEdit_userIcon">
        <img src={UserIcon} alt="" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>Имя</div>
          <input defaultValue={items.first_name} {...register('first_name')} type="text" />
        </div>
        <div>
          <div>Фамилия</div>
          <input defaultValue={items.last_name} {...register('last_name')} type="text" />
        </div>
        <div>
          <div>Электронный адресс</div>
          <input defaultValue={items.email} {...register('email')} type="text" />
        </div>
        <div>
          <div>Старый пароль</div>
          <input {...(register('old_password'), { minLength: 8 })} type="password" />
        </div>
        <div>
          <div>Навый пароль</div>
          <input {...(register('password'), { minLength: 8 })} type="password" />
        </div>
        <div>
          <div>Потвердить пароль</div>
          <input {...(register('password2'), { minLength: 8 })} type="password" />
        </div>

        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default Edit;
