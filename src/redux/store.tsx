import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signupSlice';
import {api} from "./api"

const store = configureStore({
  reducer: {
    auth: signupReducer,
    [api.reducerPath]:api.reducer
  },
  middleware:(defaultMiddleware)=>defaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
