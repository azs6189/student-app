import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Student = (props) => {
	const [isPresent, setIsPresent] = useState(false);
	const togglePresence = () => {
		setIsPresent(!isPresent);
	};
	return (
		<div>
			<ul>
				<li>Nickname: {props.nameData}</li>
				<li>Email: {props.emailData}</li>
			</ul>
			<button>Toggle if {props.name} is present</button>
		</div>
	);
};

// Defines PropTypes validators
Student.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
};

export default Student;
