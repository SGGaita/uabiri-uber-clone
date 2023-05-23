import { configureStore } from '@reduxjs/toolkit'
import navReducer from './navSlice'
import userReducer from './userSlice'
import vehicleReducer from './vehicleTypeSlice'


export const store = configureStore({
    reducer: {
      nav: navReducer,
      user: userReducer,
      vehicle: vehicleReducer
    }
})