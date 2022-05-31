import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import schoolReducer from '../features/schools/schoolSlice';
import studentReducer from '../features/students/studentSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    schools: schoolReducer,
    students: studentReducer,
  },  
});
