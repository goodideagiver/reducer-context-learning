import styled from 'styled-components';
import Item from './Item';

const SItems = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const NoItems = styled.p`
	box-sizing: border-box;
	background: purple;
	font-size: 2rem;
	color: white;
	text-align: center;
	padding: 1rem;
	border-radius: 1rem;
	overflow: hidden;

	animation: show .3s forwards ease-in-out;

	@keyframes show {
		from {
			opacity: 0;
			transform: scale(0.98);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
`;

const Items = ({ cartState }) => {
	const items = cartState.items;

	if (items.length === 0) {
		return <NoItems>There are no items in your cart 😐</NoItems>;
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
