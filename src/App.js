import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
	const studentData = [
		{
			namdData: 'Ada',
			emailData: 'ada@dev.org',
		},
		{
			namdData: 'Soo-ah',
			emailData: 'sooah@dev.org',
		},
		{
			namdData: 'Chrissy',
			emailData: 'chrissy@dev.org',
		},
	];

	return (
		<main>
			<h1>Attendance</h1>
			<ClassInfo memberCount={studentData.length}></ClassInfo>
			<StudentList students={studentData}></StudentList>
		</main>
	);
}

export default App;
