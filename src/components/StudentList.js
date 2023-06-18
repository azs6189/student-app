import React from 'react';
import Student from './Student';
import './StudentList.css';

const StudentList = () => {
	return (
		<section>
			<h2 className="student-list__heading">Student List</h2>
			<ul className="student-list">
				<li>
					{/* Shorthand for displaying components 
                    previously: <Student></Student> */}
					<Student name="Ada" email="ada@dev.org" />
				</li>
				<li>
					<Student name="Soo-ah" email="sooh@dev.org" />
				</li>
				<li>
					<Student name="Chrissy" email="chrissy@dev.org" />
				</li>
			</ul>
		</section>
	);
};

export default StudentList;
