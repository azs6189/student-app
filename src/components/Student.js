import React from 'react';
import PropTypes from 'prop-types';

const Student = (props) => {
	return (
		<ul>
			<li>Nickname: {props.nameData}</li>
			<li>Email: {props.emailData}</li>
		</ul>
	);
};

// Defines PropTypes validators
Student.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
};

export default Student;
