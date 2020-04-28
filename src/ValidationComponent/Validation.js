import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div `
	 color: red;
	 &:hover {
	 	font-weight: bold;
	 }
`;


const lengthCheck = (props) => {
	console.log("inputLength: " + props.inputLength);
	let text = "Text too short";
	if (props >= 5) {
		text = "Text long enough";
	};
	return (
		<StyledDiv alt={text}>
		{
			props.inputLength > 5 ?
				<p className="{css.green}">Text long enough</p> :
				<p>Text too short!</p>
		}
		</StyledDiv>
	)
};

export default lengthCheck;