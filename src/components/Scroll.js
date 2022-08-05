import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', boxShadow: '0px 5px 30px 10px rgba(0,255,255,0.4)', height: '720px'}}>
			{props.children}
		</div>
	)
};

export default Scroll;