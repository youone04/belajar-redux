import { configureStore } from '@reduxjs/toolkit';
import { reducerGetData } from '../Reducers/reducerGetData';
import { reducerCount } from '../Reducers/reducerCount';


export const store = configureStore({
  reducer: {
    data : reducerGetData,
    count : reducerCount
  },
})