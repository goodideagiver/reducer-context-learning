import { useContext, useRef } from 'react';
import classes from './ItemForm.module.css';

import { CartContext } from '../../../../store/cart-provider';

const ItemForm = ({ id, item }) => {
	const { cartDispatch } = useContext(CartContext);
	const input = useRef();

	const itemFormSubmitHandler = (ev) => {
		console.log('clicked');
		ev.preventDefault();
		cartDispatch({
			type: 'ADD',
			item: { ...item, count: input.current.value },
		});
	};

	return (
		<form onSubmit={itemFormSubmitHandler} className={classes.form}>
			<div className={classes.controls}>
				<label htmlFor={id}>Count</label>
				<input
					ref={input}
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
