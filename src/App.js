import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import Post from './components/Post';

function App() {
	const studentData = [
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
	];

	return (
		<main>
			<h1>Attendance</h1>
			<ClassInfo memberCount={studentData.length}></ClassInfo>
			<StudentList students={studentData}></StudentList>

			<Post />
			<Post />
			<Post />
		</main>
	);
}

export default App;
