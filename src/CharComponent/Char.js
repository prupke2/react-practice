import React from 'react';
import styled from 'styled-components';

	const CharStyle = styled.div`
      display: inline-block;
      padding: 16px;
      text-align: center;
      margin: 10px;
      border-radius: 100%;
      border: 1px solid black;
      cursor: pointer;
      &:hover {
      	background: white;
      	color: black;
      }
    `;

	const chars = (props) => {

		return(
			<CharStyle onClick={props.clicked}>
				{props.character}
			</CharStyle>
		);
	};

export default chars;