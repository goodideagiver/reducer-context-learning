import Card from '../UI/Card/Card';
import Items from './components/Items/Items';

import classes from './Shop.module.css';

const Shop = () => {
	return (
		<Card className={classes.shop}>
			<Items />
		</Card>
	);
};

export default Shop;
