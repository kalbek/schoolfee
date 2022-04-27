import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import schoolReducer from '../features/schools/schoolSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    schools: schoolReducer,
  },
});
