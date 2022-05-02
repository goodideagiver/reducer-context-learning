import styled from 'styled-components';
import Item from './Item';

const SItems = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const Items = ({ cartState }) => {
	const items = cartState.items;

	if (items.length === 0) {
		return <p>There are no items in your cart</p>;
	}

	return (
		<SItems>
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</SItems>
	);
};

export default Items;
