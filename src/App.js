import { useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
// import Post from './components/Post';

function App() {
	// All student data
	const [studentData, setStudentData] = useState([
		{
			id: 1,
			nameData: 'Ada',
			emailData: 'ada@dev.org',
			idPresentData: false,
		},
		{
			id: 2,
			nameData: 'Soo-ah',
			emailData: 'sooah@dev.org',
			idPresentData: false,
		},
		{
			id: 3,
			nameData: 'Chrissy',
			emailData: 'chrissy@dev.org',
			idPresentData: true,
		},
	]);

	const updateStudentData = (updatedStudent) => {
		const students = studentData.map((student) => {
			if (student.id === updatedStudent.id) {
				return updatedStudent;
			} else {
				return student;
			}
		});

		setStudentData(students);
	};

	return (
		<main>
			<h1>Attendance</h1>
			<ClassInfo memberCount={studentData.length}></ClassInfo>
			<StudentList
				students={studentData}
				onUpdateStudent={updateStudentData}
			></StudentList>
		</main>
	);
}

export default App;
