import React from 'react';

const Post = () => {
	const printMessage = (event) => {
		console.log("Hello! We're in printMessage!");
		console.log('This event object contains details about the event:', event);
	};

	return (
		<section>
			{/* <button onClick={printMessage}>Like</button> */}

			{/* anonymous function */}
			<button onClick={() => printMessage()}>Like</button>
		</section>
	);
};

export default Post;
