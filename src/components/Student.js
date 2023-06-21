import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Student.css';

const Student = (props) => {

	const nameColor = props.isPresent ? 'green' : 'red';

	return (
		<div>
			<ul>
				<li className={nameColor}>Nickname: {props.nameData}</li>
				<li>Email: {props.emailData}</li>
			</ul>
			<button onClick={/* togglePresence */}>
				Toggle if {props.name} is present
			</button>
		</div>
	);
};

// Defines PropTypes validators
Student.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	isPresent: PropTypes.bool,
    onUpdate: PropTypes.func.isRequired
};

export default Student;
