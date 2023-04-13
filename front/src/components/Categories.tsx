import React, { SetStateAction, useEffect } from 'react';
import axios from 'axios';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number, name: string) => void;
};

// const categorieslist = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  const [categories, setCategories] = React.useState<any>([]);
  // const [activeCategory, setActiveCategory] = React.useState(value);

  useEffect(() => {
    console.log('value', value);

    axios
      .get('http://back.imenu.kg/api/v1/categories/')
      .then((response) => response.data)
      .then((data) => setCategories([...data]));
  }, []);

  return (
    <div className="categories">
      <ul>
        {categories.map((category: any, i: any) => (
          <li
            key={i}
            onClick={() => onChangeCategory(category.id, category.name)}
            className={value === category.id ? 'active' : ''}>
            <img className={value === category.id ? 'active' : ''} src={category.icon} alt="" />
            {/* <div>{category.name}</div> */}
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
});
