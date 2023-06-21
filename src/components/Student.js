import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Student.css';

const Student = (props) => {
	const onAttendanceButtonClick = () => {
		const updatedStudent = {
			id: props.id,
			nameData: props.name,
			emailData: props.email,
			isPresentData: !props.isPresent,
		};

		// Invoke the function passed in through the prop named "onUpdate"
		// This function is referenced by the name "updateStudentData" in App
		props.onUpdate(updatedStudent);
	};

	// ... other rendering logic

	const nameColor = props.isPresent ? 'green' : 'red';

	return (
		<div>
			<ul>
				<li className={nameColor}>Nickname: {props.nameData}</li>
				<li>Email: {props.emailData}</li>
			</ul>
			<button onClick={onAttendanceButtonClick}>
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
	onUpdate: PropTypes.func.isRequired,
};

export default Student;
