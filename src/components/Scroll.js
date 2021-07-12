import React from 'react';

const Scroll =(props) => {
	return (
		<div style ={{overflow: 'scroll', border:'0px solid  black', height:'850px'}}>
			{props.children}
		</div>
		);
};


export default Scroll;