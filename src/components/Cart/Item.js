import styled from 'styled-components';

const StyledItem = styled.li`
	padding: 1rem;
	display: flex;
	gap: 1rem;
	justify-content: space-between;
`;

const Item = ({ item }) => {
	const { name, price } = item;

	const formattedPrice = `$${price.toFixed(2)}`;

	return (
		<StyledItem>
			<div>{name}</div>
			<div>{formattedPrice}</div>
		</StyledItem>
	);
};

export default Item;
