import React from 'react';
import Student from './Student';
import './StudentList.css';

const StudentList = () => {
    const studentData = [
			{
				name: 'Ada',
				email: 'ada@dev.org',
			},
			{
				name: 'Soo-ah',
				email: 'sooah@dev.org',
			},
			{
				name: 'Chrissy',
				email: 'chrissy@dev.org',
			},
		];

	const studentComponents = studentData.map(student => {
        return (
            <li><Student name={studentData.name} email={studentData.email}></Student></li>
        )
    })


	return (
		<section>
			<h2 className="student-list__heading">Student List</h2>
			<ul className="student-list">{studentComponents}</ul>
		</section>
	);
};

export default StudentList;
