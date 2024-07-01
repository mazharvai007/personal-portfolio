import { useState } from 'react';

const useAlert = () => {
	const [alert, setAlert] = useState({
		show: false,
		text: '',
		type: 'danger',
	});

	const showAlert = ({
		show,
		text,
		type = 'danger',
	}: {
		show: boolean;
		text: string;
		type: string;
	}) => {
		setAlert({ show: true, text, type });
	};

	const hideAlert = () => {
		setAlert({ show: false, text: '', type: 'danger' });
	};

	return { alert, showAlert, hideAlert };
};

export default useAlert;
