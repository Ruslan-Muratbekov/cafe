import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import Look from '../svg/search.svg';

import styles from './Search.module.scss';
import { setSearchValue } from '../../redux/filter/slice';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [resActive, setResActive] = React.useState(false);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 700),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.input_icon}>
        <img className="styles.root_block" src={Look} alt="" />
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className={styles.input_block}
          placeholder="Поиск ..."
        />
      </div>
      <div className={styles.input_icon_forRes}>
        <img
          onClick={() => setResActive(!resActive)}
          className={styles.search__img}
          src={Look}
          alt=""
        />
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className={resActive ? styles.input_block_forRes : 'none'}
          placeholder="Поиск ..."
        />
      </div>
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};
