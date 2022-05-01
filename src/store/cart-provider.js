import React, { useReducer } from 'react';

const DEFAULT_CART = { items: [], totalPrice: 0, totalItems: 0 };

export const CartContext = React.createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD': {
			return { ...state, items: [...state.items, action.item] };
		}
		case 'REMOVE': {
			return;
		}
		default: {
			return state;
		}
	}
};

const CartProvider = ({ children }) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, DEFAULT_CART);

	const value = { cartState, cartDispatch };

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

export { CartProvider };
