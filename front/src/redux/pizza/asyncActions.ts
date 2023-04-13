import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Data, SearchPizzaParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchPizzas = createAsyncThunk<Data, SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { ordering, category, search, currentPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Data>(`http://back.imenu.kg/api/v1/items/`, {
      params: pickBy(
        {
          page: currentPage,
          category,
          ordering,
          search,
        },
        identity,
      ),
    });

    return data;
  },
);
