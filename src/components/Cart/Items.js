import styled from 'styled-components';
import { CartContext } from '../../store/cart-provider';
import Item from './Item';
import { useContext } from 'react';

const SItems = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const Items = () => {
	const { cartState } = useContext(CartContext);

	const items = cartState.items;

	if (!items) {
		return;
	}

	return (
		<SItems>
			{items.map((item) => (
				<Item item={item} />
			))}
		</SItems>
	);
};

export default Items;
