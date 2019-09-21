import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';

class AboutLabel extends React.Component{
	render(){

		return(
			<div>
				<div className='gridWrapperAbout'>
					<div className='aboutContent'>
						<img className='aboutImage' src='https://i.imgur.com/G0Y6Wdz.gif' />
						<p className='aboutWrite'></p>
					</div>
				</div>
			</div>
		)
	}
}

export default AboutLabel;


