import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authSliceState {
    isAuth: boolean;
    token: string;
}

const initialState: authSliceState = {
    isAuth: false,
    token: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.isAuth = true;
            state.token = action.payload;
        },
        logout: (state) => {
            state.isAuth = false;
            state.token = '';
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
