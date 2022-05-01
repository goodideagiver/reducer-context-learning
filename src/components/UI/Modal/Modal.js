import React from 'react';

import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = ({ onClose, className }) => {
	return <div className={className} onClick={onClose} />;
};

const Content = (props) => {
	return (
		<div className={props.className}>
			<header>{props.title}</header>
			<main>{props.children}</main>
		</div>
	);
};

const Modal = ({ onClose, title, ...props }) => {
	return ReactDOM.createPortal(
		<>
			<Content
				className={classes.content}
				title={title}
				onClose={onClose}
			>
				{props.children}
			</Content>
			<Backdrop className={classes.backdrop} onClose={onClose} />
		</>,
		document.getElementById('overlay')
	);
};

export default Modal;
