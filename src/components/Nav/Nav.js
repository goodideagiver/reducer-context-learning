import CartButton from '../CartButton/CartButton';
import classes from './Nav.module.css';

const Nav = ({ onClick }) => {
	return (
		<nav className={classes.nav}>
			<h1>THE BEST SHOP EVER</h1>
			<CartButton onClick={onClick} />
		</nav>
	);
};

export default Nav;
