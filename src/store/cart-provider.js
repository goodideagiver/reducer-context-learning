import React, { useReducer } from 'react';

const DEFAULT_CART = { items: [], totalPrice: 0, totalItems: 0 };

export const CartContext = React.createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD': {
			const foundItemIndex = state.items.findIndex(
				(it) => it.id === action.item.id
			);

			const foundItem = state.items[foundItemIndex];

			if (foundItem) {
				const newStateItems = [...state.items];
				newStateItems[foundItemIndex].count =
					+newStateItems[foundItemIndex].count + +action.item.count;

				let newTotal;
				const itemsCounts = newStateItems.map((el) => el.count);
				if (itemsCounts.length > 1) {
					newTotal = itemsCounts.reduce((a, b) => a + b, 0);
				} else {
					newTotal = itemsCounts[0];
				}

				return {
					...state,
					totalItems: newTotal,
					items: [...newStateItems],
				};
			}

			let newTotal;
			const newItems = [...state.items, action.item];
			if (newItems.length > 1) {
				newTotal = newItems.reduce((a, b) => a.count + b.count, 0);
			} else {
				newTotal = newItems[0].count;
			}
			return {
				...state,
				totalItems: newTotal,
				items: newItems,
			};
		}
		case 'REMOVE': {
			const newTotal = state.totalItems--;

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
