import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Navbar3 from './navbar3.js';

import '../css/artist.css';
import '../css/normalize.css';
import '../css/skeleton.css';

class Auditory extends React.Component{

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

	componentDidMount () {
		console.log('life');
			if(typeof window !== 'undefined'){

		    	var retrievedObject = localStorage.getItem('id');
		    	var retrievedData = this.props.artist[JSON.parse(retrievedObject)];

					this.setState({
						image1:retrievedData.display_src,
						name:retrievedData.name,
						mv:retrievedData.mv,
						bio:retrievedData.bio,
				    	youtube:retrievedData.youtube,
				    	twitter:retrievedData.twitter,
				    	instagram:retrievedData.instagram,
				    	facebook:retrievedData.facebook
					});
					console.log('time',this);
	    	}
	}
}

export default Auditory;