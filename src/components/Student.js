import React from 'react';

const Student = (props) => {
	return (
		<ul>
			<li>Nickname: {props.nameData}</li>
			<li>Email: {props.emailData}</li>
		</ul>
	);
};

export default Student;
