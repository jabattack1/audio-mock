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
					Come back to see if any positions open up.
					<div className='bannerSun'>
 						<img src='https://i.imgur.com/QEuTfm8.gif' className='spaceDrop' />
 						<img src="https://i.imgur.com/SMLpXaX.png" title="source: imgur.com" className='auditorySign' />
 						<div className='moon'></div>
 						<h1 className='sun'>I DON'T WANT TO GO AND SEE THE SUN</h1>
					</div>
				</p>
				<p className='policyFill'>
				</p>
			</div>
		)
	}
}

export default Jobs;
