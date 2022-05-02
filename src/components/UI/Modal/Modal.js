import React from 'react';

import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

import styled from 'styled-components';

const ModalHeader = styled.header`
	display: flex;
	justify-content: space-between;
`;

const CloseBtn = styled.button`
	background: 0;
	border: 0;
	cursor: pointer;

	&:hover {
		color: purple;
	}
`;

const Backdrop = ({ onClose, className }) => {
	return <div className={className} onClick={onClose} />;
};

const Content = (props) => {
	return (
		<div className={props.className}>
			<ModalHeader>
				<h2>{props.title}</h2>
				<CloseBtn onClick={props.onClose}>Close</CloseBtn>
			</ModalHeader>
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
