import { useContext } from 'react';
import classes from './ItemForm.module.css';

import { CartContext } from '../../../../store/cart-provider';

const ItemForm = ({ id, item }) => {
	const { cartDispatch } = useContext(CartContext);

	const itemFormSubmitHandler = (ev) => {
		ev.preventDefault();
		cartDispatch({ type: 'ADD', item });
	};

	return (
		<form onSubmit={itemFormSubmitHandler} className={classes.form}>
			<div className={classes.controls}>
				<label htmlFor={id}>Count</label>
				<input
					min={1}
					max={5}
					step={1}
					defaultValue={1}
					type='number'
					name='amount'
					id={id}
					required
				/>
			</div>
			<button type='submit'>Add</button>
		</form>
	);
};

export default ItemForm;
