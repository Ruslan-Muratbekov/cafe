import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import CartShop from '../components/svg/cartShop.svg';

import { Categories, Sort, PizzaBlock, Skeleton, Pagination, Search } from '../components';

import { sortList } from '../components/Sort';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectPizzaData } from '../redux/pizza/selectors';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/filter/slice';
import { fetchPizzas } from '../redux/pizza/asyncActions';
import { SearchPizzaParams } from '../redux/pizza/types';
import { selectCart } from '../redux/cart/selectors';
import MainFooter from '../components/mainFooter';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);

  const { data, status } = useSelector(selectPizzaData);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const [defaultValue, setDefaultValue] = useState<any>();
  const onChangeCategory = React.useCallback((idx: number, name: string) => {
    setDefaultValue(name);

    dispatch(setCategoryId(idx));
    dispatch(setCurrentPage(1));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const ordering = sort.sortProperty.includes('-') ? 'rating' : '-rating';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;

    dispatch(
      fetchPizzas({
        ordering,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  };

  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    // if (isMounted.current) {
    //   const params = {
    //     categoryId: categoryId > 0 ? categoryId : null,
    //     sortProperty: sort.sortProperty,
    //     currentPage,
    //   };

    //   const queryString = qs.stringify(params, { skipNulls: true });

    //   navigate(`/?${queryString}`);
    // }

    // const params = qs.parse(window.location.name.substring(1)) as unknown as SearchPizzaParams;
    // const sortObj = sortList.find((obj) => obj.sortProperty === params.sortBy);
    // dispatch(
    //   setFilters({
    //     searchValue: params.name,
    //     categoryId: Number(params.category),
    //     currentPage: Number(params.currentPage),
    //     sort: sortObj || sortList[0],
    //   }),
    // );

    getPizzas();
    // isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // Парсим параметры при первом рендере
  // React.useEffect(() => {
  //   if (window.location.name) {
  //     const params = qs.parse(window.location.name.substring(1)) as unknown as SearchPizzaParams;
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
  //     dispatch(
  //       setFilters({
  //         searchValue: params.name,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || sortList[0],
  //       }),
  //     );
  //   }
  //   isMounted.current = true;
  // }, []);

  const pizzas = data.results.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const pageCount = Math.ceil(data.count / 12);

  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();
  const isMountedd = React.useRef(false);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  // React.useEffect(() => {
  //   if (isMountedd.current) {
  //     const json = JSON.stringify(items);
  //     localStorage.setItem('cart', json);
  //   }
  //   isMountedd.current = true;
  // }, [items]);

  return (
    <>
      <div className="container">
        <div className="content_tops_top">
          {location.pathname !== '/cart' && <Search />}
          <div className="header__cart">
            {location.pathname !== '/cart' && (
              <Link to="/cart" className="cart_btn">
                <span>{totalPrice} сом</span>
                <div className="button__delimiter"></div>
                <img src={CartShop} alt="" />
                <button className="count">{totalCount}</button>
              </Link>
            )}
          </div>
        </div>
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        </div>
        <h2 className="content__title">
          {defaultValue === undefined ? 'Популярные ' : defaultValue}
        </h2>
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>Произошла ошибка 😕</h2>
            <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
          </div>
        ) : (
          <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
        )}

        {/* <Pagination currentPage={currentPage} onChangePage={onChangePage} pageCount={pageCount} /> */}

        <div className="container_footer">
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default Home;
