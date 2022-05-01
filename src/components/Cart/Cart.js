import React from 'react';
import Modal from '../UI/Modal/Modal';
import Items from './Items';

const Cart = ({ onClose, ...props }) => {
	return (
		<Modal onClose={onClose} title='Cart'>
			<Items />
		</Modal>
	);
};

export default Cart;
