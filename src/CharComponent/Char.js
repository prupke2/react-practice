import React from 'react';

	const chars = (props) => {
		const charStyle = {
	      display: 'inline-block',
	      padding: '16px',
	      textAlign: 'center',
	      margin: '10px',
	      borderRadius: '100%',
	      border: '1px solid black',
	      cursor: 'pointer'
	    };

		return(
			<div style={charStyle} onClick={props.clicked}>
				{props.character}
			</div>
		);
	};

export default chars;