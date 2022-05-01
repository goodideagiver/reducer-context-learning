import CartButton from '../CartButton/CartButton';
import classes from './Nav.module.css';

const Nav = () => {
	return (
		<nav className={classes.nav}>
			<h1>THE BEST SHOP EVER</h1>
			<CartButton/>
		</nav>
	);
};

export default Nav;
