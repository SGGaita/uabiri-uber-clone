import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  uid: null,
  name: null,
  //phone: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.uid = action.payload.uid;
      state.name = action.payload.name;
      //state.phone = action.payload.phone;
    },
    clearUser: (state) => {
      state.isAuthenticated = false;
      state.uid = null;
      state.name = null;
      //state.phone = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
