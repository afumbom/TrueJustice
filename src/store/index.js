import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import caseSlice from './caseSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    cases: caseSlice,
  },
});

export default store;
