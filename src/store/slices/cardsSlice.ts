import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from '../../types/types';

interface cardsSliceState {
    cards: ICard[];
}

const initialState: cardsSliceState = {
    cards: [],
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCards: (state, action: PayloadAction<ICard[]>) => {
            state.cards = action.payload;
        },
    },
});

export const { setCards } = cardsSlice.actions;

export default cardsSlice.reducer;
