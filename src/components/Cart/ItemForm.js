import styled from 'styled-components';

import { useContext } from 'react';
import { CartContext } from '../../store/cart-provider';

const ItemForm = ({ item }) => {
	const { cartDispatch } = useContext(CartContext);

	const addItemBtnHandler = () => {
		cartDispatch({ type: 'ADD', item: { ...item, count: 1 } });
	};

	const removeItemBtnHandler = () => {
		cartDispatch({ type: 'REMOVE', item: item });
	};

	const deleteItemBtnHandler = () => {
		cartDispatch({ type: 'DELETE', item: item });
	};

	return (
		<div>
			<button onClick={addItemBtnHandler}>+</button>
			<button onClick={removeItemBtnHandler}>-</button>
			<button onClick={deleteItemBtnHandler}>Delete</button>
		</div>
	);
};

export default ItemForm;
