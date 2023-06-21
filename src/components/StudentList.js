import React from 'react';
import Student from './Student';
import './StudentList.css';
import PropTypes from 'prop-types';

const StudentList = (props) => {
	const studentComponents = props.students.map((student, index) => {
		return (
			<li key={index}>
				<Student
					id={student.id}
					name={student.nameData}
					email={student.emailData}
					isPresent={student.isPresentData}
				></Student>
			</li>
		);
	});

	return (
		<section>
			<h2 className="student-list__heading">Student List</h2>
			<ul className="student-list">{studentComponents}</ul>
		</section>
	);
};

// Defines PropTypes validators
StudentList.propTypes = {
	students: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			nameData: PropTypes.string.isRequired,
			emailData: PropTypes.string.isRequired,
			isPresentData: PropTypes.bool,
		})
	),
	onUpdateStudent: PropTypes.func.isRequired,
};

export default StudentList;
