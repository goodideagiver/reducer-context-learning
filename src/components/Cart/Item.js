import styled from 'styled-components';
import ItemForm from './ItemForm';

const StyledItem = styled.li`
	padding: 1rem;
	display: flex;
	gap: 1rem;
	justify-content: space-between;
`;

const ItemDetails = styled.div`
	display: flex;
	gap: 1rem;
`;

const CountBlob = styled.div`
	background: green;
	padding: 5px;
	color: white;
	border-radius: 3px;
`;

const Item = ({ item }) => {
	const { name, price, count } = item;

	const formattedPrice = `$${price.toFixed(2)}`;

	return (
		<StyledItem>
			<div>{name}</div>
			<ItemDetails>
				<CountBlob>
					<span>x </span>
					<span>{count}</span>
				</CountBlob>
				<div>{formattedPrice}</div>
				<ItemForm item={item} />
			</ItemDetails>
		</StyledItem>
	);
};

export default Item;
