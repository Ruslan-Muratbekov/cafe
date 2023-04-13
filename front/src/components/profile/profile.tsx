import React, { useEffect, SetStateAction } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

import UserIcon from '../svg/user.svg';
import EditIcon from '../svg/edit.svg';

interface Props {
  setIsEdit: React.Dispatch<SetStateAction<boolean>>;
  items: any;
  setItems: React.Dispatch<SetStateAction<boolean>>;
}

const ProfileShow = ({ setIsEdit, items, setItems }: Props) => {
  const token = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token') || '')
    : undefined;

  useEffect(() => {
    axios
      .get('http://back.imenu.kg/api/v1/auth/profile', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => res.data)
      .then((data) => setItems(data));
  }, []);

  const removeItem = () => {
    localStorage.removeItem('token');
  };

  if (token) {
    return (
      <div className="ProfileShow">
        <div className="ProfileShow_userIcon">
          <img src={UserIcon} alt="" />
        </div>
        <div className="profile__info">
          <div className="profile__info-email1">
            {items.first_name + ' ' + items.last_name}{' '}
            <img
              onClick={() => {
                setIsEdit(true);
              }}
              src={EditIcon}
              alt=""
            />
          </div>
          <div className="profile__info-email">{items.email}</div>
        </div>

        <Link to="/login">
          <button onClick={removeItem} className="profile_btn">
            Выйти из аккаунта
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Navigate to="/login" replace={true} />;
      </div>
    );
  }
};

export default ProfileShow;
