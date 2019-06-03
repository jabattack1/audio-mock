import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';

class Contact extends React.Component{
	render(){

		return(
			<div>
				<div className='gridWrapperContact'>
					<div className='contactContent'>
						<div className='contact'>
							<p className='contactLinks'>Inquiries/Questions: <a className='email' href="info@audio-boy.com">info@audio-boy.com</a></p>
							<p className='contactLinks'>Media: <a className='email' href="pr@audio-boy.com">pr@audio-boy.com</a></p>
							<p className='contactLinks'>Legal: <a className='email' href="hr@audio-boy.com">legal@audio-boy.com</a></p>
							<p className='contactLinks'>Store: <a className='email' href="info@audio-boy.com">info@audio-boy.com</a></p>
							<div className='solicitation'>
								<p className='serious'>Audio-Boy does not accept unsolicited material</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;


<a href="https://imgur.com/ebTCU1p"><img src="https://i.imgur.com/ebTCU1p.gif" title="source: imgur.com" /></a>