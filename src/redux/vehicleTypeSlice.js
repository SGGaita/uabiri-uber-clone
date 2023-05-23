// vehicleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    vehicleType: null,
}

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    setType: (state, action) => {
      state.vehicleType = action.payload;
    },
  },
});

export const { setType } = vehicleSlice.actions;
//selectors
export const selectType = (state) => state.vehicle.vehicleType;

export default vehicleSlice.reducer;