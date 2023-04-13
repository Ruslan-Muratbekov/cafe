import { useState } from 'react';
import { useAppSelector } from '../../redux/cities/hooks';
import MainFooter from '../mainFooter';
import Edit from './Edit';
import ProfileShow from './profile';

export const Profile = () => {
  const { profile } = useAppSelector((state) => state);

  const [items, setItems] = useState<any>({});

  console.log(profile.data);

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="profile">
      {isEdit ? (
        <Edit items={items} setIsEdit={setIsEdit} />
      ) : (
        <ProfileShow items={items} setItems={setItems} setIsEdit={setIsEdit} />
      )}
      <div className="footer">
        <MainFooter />
      </div>
    </div>
  );
};
