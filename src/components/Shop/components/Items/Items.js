import cartItems from '../../data';
import Item from '../Item/Item';

const Items = () => {

	return (
		<ul>
			{cartItems.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</ul>
	);
};

export default Items;
