import { configureStore } from '@reduxjs/toolkit'
import navReducer from './navSlice'
import userReducer from './userSlice'
import vehicleReducer from './vehicleTypeSlice'
import routesReducer from './routesSlice'


export const store = configureStore({
  reducer: {
    nav: navReducer,
    user: userReducer,
    vehicle: vehicleReducer,
    routes: routesReducer
  }
})