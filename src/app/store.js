import { configureStore, createReducer } from '@reduxjs/toolkit';
import carSlice from '../features/car/carSlice';
export const store = configureStore({
  reducer: {
    car: carSlice
  },
});
