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
						<img className='aboutImage' src='https://i.imgur.com/aO06yG3.png' />
						Audio Boy is an independent recording company with ambitions of becoming home to the very best forward-thinking and innovative artists. Our reputation in the music industry is something we feel a great responsibility for and we would like to establish ourselves as a company who offer an unparalleled experience for the artists and the listeners alike. With a focus on influencing the world's pop culture without any boundaries, and a passionate approach towards discovering and nurturing musical talent - Audio Boy is currently home to The Electronic Auditory Rebels and many more to come in the future! Please stay tuned....
					</div>
				</div>
			</div>
		)
	}
}

export default AboutLabel;