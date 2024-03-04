import React, { useReducer, useEffect } from 'react';

// Khởi tạo initialState
export const initialState = {
    cartItems: [],
    showSuccessMessage: false,
    quantity: 1,
};

// Khởi tạo reducer
export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.cartItems.find((item) => item.id === action.payload.product.id);

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === existingItem.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item
                    ),
                    showSuccessMessage: true,
                    quantity: 1,
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload.product, quantity: action.payload.quantity }],
                    showSuccessMessage: true,
                    quantity: 1,
                };
            }

        case 'RESET_SUCCESS_MESSAGE':
            return {
                ...state,
                showSuccessMessage: false,
            };

        default:
            return state;
    }
};
