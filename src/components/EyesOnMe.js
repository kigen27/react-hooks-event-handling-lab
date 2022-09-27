// Code EyesOnMe Component Here

import React from "react";

function EyesOnMe() {
	const handleBlure = (event) => {
		console.log("Hey! Eyes on me!");
	};
	const handleFocus = () => {
		console.log("Good!");
	};
	return (
		<>
			<button onBlur={handleBlure} onFocus={handleFocus}>
				Eyes on me
			</button>
		</>
	);
}
export default EyesOnMe;