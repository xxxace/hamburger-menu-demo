import {createSlice} from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        list: []
    },
    reducers: {
        addMerchandise(state, action) {
            const {payload} = action;
            const existMerchandise = state.list.find(m => m.id === payload.id);

            if (existMerchandise) {
                existMerchandise.amount += 1
            } else {
                state.list.push({...payload, amount: 1})
            }
        },
        removeMerchandise(state, action) {
            state.list.some((m, i) => {
                if (m.id === action.payload) {
                    if (m.amount > 1) {
                        m.amount -= 1;
                    } else {
                        state.list.splice(i, 1);
                    }
                    return true;
                }
            });
        }
    }
});

export const selectTotal = state => {
    return state.shoppingCart.list.reduce((prev, next) => {
        prev.price += next.price * next.amount;
        prev.amount += next.amount || 0;
        return prev;
    }, {price: 0, amount: 0})
};

export const {addMerchandise, removeMerchandise} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
