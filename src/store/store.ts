import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import cardsSlice from './slices/cardsSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        cards: cardsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
