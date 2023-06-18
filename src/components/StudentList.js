import React from 'react';
import Student from './Student';
import './StudentList.css';

const StudentList = () => {
	const studentComponents = [
		<li>
			{/* Shorthand for displaying components 
                    previously: <Student></Student> */}
			<Student name="Ada" email="ada@dev.org" />
		</li>,
		<li>
			<Student name="Soo-ah" email="sooh@dev.org" />
		</li>,
		<li>
			<Student name="Chrissy" email="chrissy@dev.org" />
		</li>,
	];
	return (
		<section>
			<h2 className="student-list__heading">Student List</h2>
			<ul className="student-list">{studentComponents}</ul>
		</section>
	);
};

export default StudentList;
