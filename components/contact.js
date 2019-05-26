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
							<a className='contactLinks' href="info@audio-boy.com">Inquiries/Questions: info@audio-boy.com</a> 
							<a className='contactLinks' href="pr@audio-boy.com">Media: pr@audio-boy.com</a> 
							<a className='contactLinks' href="hr@audio-boy.com">Legal: legal@audio-boy.com</a> 
							<p id='serious'>Audio-Boy does not accept unsolicited material</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;