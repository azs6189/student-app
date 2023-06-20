import React from 'react';
import { useState } from 'react';

const Post = () => {
	const [likesCount, setLikesCount] = useState(0);

	const increaseLikes = () => {
		console.log("We're inside increaseLikes!");
		setLikesCount(likesCount + 1);
	};

	const printMessage = (event) => {
		console.log("Hello! We're in printMessage!");
		console.log('This event object contains details about the event:', event);
	};

	return (
		<section>
			<p>The number of likes is {likesCount}</p>
			<button onClick={(printMessage, increaseLikes)}>Like</button>

			{/* anonymous function */}
			{/* <button onClick={() => printMessage()}>Like</button> */}
		</section>
	);
};

export default Post;
