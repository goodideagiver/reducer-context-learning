import React from 'react';

import ReactDOM from 'react-dom';

const Backdrop = ({ onClose }) => {
	<div onClick={onClose} />;
};

const Content = (props) => {
	<div></div>;
};

const Modal = ({ onClose, ...props }) => {
	return ReactDOM.createPortal(
		<>
			<Content onClose={onClose}>{props.children}</Content>
			<Backdrop onClose={onClose} />
		</>,
		document.getElementById('overlay')
	);
};

export default Modal;
