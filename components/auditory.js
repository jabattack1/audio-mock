import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Navbar3 from './navbar3.js';

import '../css/artist.css';
import '../css/normalize.css';
import '../css/skeleton.css';

class Auditory extends React.Component{

	
	constructor(props){

	    super(props)

	    let data = props.artist.find(i => i.code === 'abcd');
	   	console.log(props)
		this.state = {
			image1:data.display_src,
			name:data.name,
			mv:data.mv,
			bio:data.bio,
	    	youtube:data.youtube,
	    	twitter:data.twitter,
	    	instagram:data.instagram,
	    	facebook:data.facebook
		}
  
	}

	state ={

	}

	render(){

		return(
			<div className='artistArea'>
				<Navbar3 name={this.state.name}/>
				<div className='artistBackground'>
					<img src={this.state.image1} className='artistMainPhoto' />  
					<div className='bio'>{this.state.bio}</div>  
					<ul className='socialHolder'>
						<li><img src='https://i.imgur.com/fV5a2fW.png' /></li>
						<li><img src='https://i.imgur.com/NauXZSM.png' /></li>
						<li><img src='https://i.imgur.com/DCzV97u.png' /></li>
						<li><img src='https://i.imgur.com/odojrFa.png' /></li>
					</ul>
					<iframe className='artistVideo' src={this.state.mv} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
			</div>
		)
	}
}

export default Auditory;