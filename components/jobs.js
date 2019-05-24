import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';

class Jobs extends React.Component{
	render(){

		return(
			<div>
				<p className='policy'>
					Come back to see if any positions opened up.
				</p>
			</div>
		)
	}
}

export default Jobs;