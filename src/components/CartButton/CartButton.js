import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../store/cart-provider';

const SCartButton = styled.button`
	background-color: red;
	border-radius: 1rem;
	color: white;
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	cursor: pointer;
	border: 0;

	&:active {
		box-shadow: rgba(0, 0, 0, 0.1) 5px 5px 10px;
	}
`;

const Blob = styled.div`
	padding: 1rem;
	background-color: black;
	color: white;
	border-radius: 50%;
`;

const CartButton = ({ onClick }) => {
	const { cartState } = useContext(CartContext);

	const itemsCount = cartState.totalItems;

	return (
		<SCartButton onClick={onClick}>
			<div>Cart</div>
			<Blob>{itemsCount}</Blob>
		</SCartButton>
	);
};

export default CartButton;
