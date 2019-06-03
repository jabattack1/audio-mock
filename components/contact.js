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
							<a className='contactLinks' href="info@audio-boy.com">Inquiries/Questions: <span className='email'>info@audio-boy.com</span></a> 
							<a className='contactLinks' href="pr@audio-boy.com">Media: <span className='email'>pr@audio-boy.com</span></a> 
							<a className='contactLinks' href="hr@audio-boy.com">Legal: <span className='email'></span>legal@audio-boy.com</a><br/>
							<a className='contactLinks' href="info@audio-boy.com">Store: <span className='email'>info@audio-boy.com</span></a> 
							<a className='contactLinks' href="pr@audio-boy.com">Ads: <span className='email'>pr@audio-boy.com</span></a> 
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