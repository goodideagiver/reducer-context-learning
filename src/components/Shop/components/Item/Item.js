import ItemForm from '../ItemForm/ItemForm';

import classes from './Item.module.css';

const Item = ({ item }) => {
	const convertPrice = `$${item.price.toFixed(2)}`;

	return (
		<li className={classes.item}>
			<div>
				<p>{item.name}</p>
			</div>
			<div className={classes.form}>
				<span>{convertPrice}</span>
				<ItemForm id={item.id} />
			</div>
		</li>
	);
};

export default Item;
