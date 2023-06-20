import React from 'react';
import { useState } from 'react';

const Post = () => {
	const [likesCount, setLikesCount] = useState(0);

	const printMessage = (event) => {
		console.log("Hello! We're in printMessage!");
		console.log('This event object contains details about the event:', event);
	};

	return (
		<section>
			<p>What is the number of likes we should display? {likesCount}</p>
			{/* <button onClick={printMessage}>Like</button> */}

			{/* anonymous function */}
			<button onClick={() => printMessage()}>Like</button>
		</section>
	);
};

export default Post;
