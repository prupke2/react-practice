import React from 'react';

const lengthCheck = (props) => {
	console.log("inputLength: " + props.inputLength);
	return (
		<div>
		{
			props.inputLength > 5 ?
				<p>Text long enough</p> :
				<p>Text too short!</p>
		}
		</div>
	)
};

export default lengthCheck;