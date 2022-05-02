import React, { useReducer } from 'react';

const DEFAULT_CART = { items: [], totalPrice: 0, totalItems: 0 };

export const CartContext = React.createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD': {
			let newTotal = +state.totalItems + +action.item.count;
			let newPrice =
				+state.totalPrice + +action.item.price * action.item.count;

			//find if item exists in the cart already
			if (state.items.length) {
				const existingItemIndex = state.items.findIndex(
					(existingItem) => existingItem.id === action.item.id
				);

				const existingItem = state.items[existingItemIndex];
				if (existingItem) {
					const updatedItem = {
						...existingItem,
						count: existingItem.count + action.item.count,
					};

					const updatedItems = [...state.items];
					updatedItems[existingItemIndex] = updatedItem;

					return {
						totalPrice: newPrice,
						totalItems: newTotal,
						items: updatedItems,
					};
				}
			}

			const newItems = [...state.items, action.item];
			return {
				totalPrice: newPrice,
				totalItems: newTotal,
				items: newItems,
			};
		}
		case 'REMOVE': {
			const newTotal = state.totalItems - action.item.count;

			return;
		}
		case 'DELETE': {
			console.log(action);
			const newPrice =
				state.totalPrice - action.item.count * action.item.price;

			const newTotal = state.totalItems - action.item.count;

			const newItems = state.items.filter(
				(el) => el.id !== action.item.id
			);

			return {
				totalPrice: newPrice,
				totalItems: newTotal,
				items: newItems,
			};
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
