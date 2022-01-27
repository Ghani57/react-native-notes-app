import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appslice';

export const store = configureStore({
  reducer: {
    note: appReducer,
  },
});