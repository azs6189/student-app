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
					<Student />
				</li>
				<li>
					<Student />
				</li>
				<li>
					<Student />
				</li>
			</ul>
		</section>
	);
};

export default StudentList;
