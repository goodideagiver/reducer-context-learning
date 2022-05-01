import classes from './ItemForm.module.css';

const ItemForm = ({ id }) => {
	return (
		<form className={classes.form}>
			<div className={classes.controls}>
				<label htmlFor={id}>Count</label>
				<input defaultValue={1} type='number' name='amount' id={id} />
			</div>
			<button type='submit'>Add</button>
		</form>
	);
};

export default ItemForm;
