import React, { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import Items from './Items';

import styled from 'styled-components';
import { CartContext } from '../../store/cart-provider';

const SumDiv = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	border-bottom: 1px gray solid;
	padding-bottom: 5px;
`;

const Cart = ({ onClose, ...props }) => {
	const { cartState } = useContext(CartContext);

	return (
		<Modal onClose={onClose} title='Cart'>
			<Items cartState={cartState} />
			<footer>
				<SumDiv>
					<span>Total price: </span>
					<span>{`$${cartState.totalPrice.toFixed(2)}`}</span>
				</SumDiv>
				<SumDiv>
					<span>Total item count: </span>
					<span>{cartState.totalItems}</span>
				</SumDiv>
			</footer>
		</Modal>
	);
};

export default Cart;
