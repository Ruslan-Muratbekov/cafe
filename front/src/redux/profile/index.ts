import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';
import { api, apiWithoutToken } from '../../services/index'

import { ProfileState } from './types'


const LocalProfile = localStorage.getItem('token')

const initialState: ProfileState = {
  loading: false,
  error: false,
  data: LocalProfile ? LocalProfile : undefined,
}


export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.data = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    editItem: (state, { payload }) => {
      state.error = false;
      state.data = payload;
    },
    editPswd: (state, { payload }) => {
      state.error = false;
      state.data = payload
    }
  },
})

// export the actions
export const { setLoading, setItems, setError, editItem, editPswd } = profileSlice.actions;


// // export the selector (".data" being same as in slices/index.js's "data: something")
// export const profileSelector = (state: { data: any }) => state.data;

// export the default reducer
export default profileSlice.reducer;

// edit profile
export function editProfile(data = {}, setIsEdit: any) {
  const token = JSON.parse(localStorage.getItem("token") || '')
  return async (dispatch: Dispatch) => {
    apiWithoutToken.patch('auth/profile', data, {
      headers: {
        Authorization: `Token ${token}`,
      }
    })
      .then((response) => {
        dispatch(editItem(response.data));
        setIsEdit(false)
      })
      .catch((er) => {
        dispatch(setError(er.detail))
      });
  };
}

//edit password
export function editPassword(data = {}, setIsEdit: any) {
  const token = JSON.parse(localStorage.getItem("token") || '')
  return async (dispatch: Dispatch) => {
    apiWithoutToken.put('auth/change_password/', data, {
      headers: {
        Authorization: `Token ${token}`,
      }
    })
      .then((response) => {
        dispatch(editPswd(response.data));
        setIsEdit(false)
      })
      .catch((er) => {
        dispatch(setError(er.detail))
      });
  };
}


// login to profile
export function loginProfile(data = {}) {
  return async (dispatch: Dispatch) => {
    apiWithoutToken.post(`auth/login/`, data)
      .then((response) => {
        dispatch(setItems(response.data));
        api.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;

        if (response.data.token !== undefined) {
          localStorage.setItem('token', JSON.stringify(response.data.token));
        }
      })
      .catch((er) => {
        console.log(er);

        dispatch(setError(er.response.data))
      });
  };
}
