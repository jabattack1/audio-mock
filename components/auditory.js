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

	    let artist = this.props.artist;
	   	let itemNumber = this.props.codeArtist.code;

	    let result = artist.filter(obj => {
  			return obj.code === itemNumber
		})
	    console.log('result', result);
	    if(result.length < 1){
	    	console.log('trash');
	    	var retrievedObject = localStorage.getItem('id');
	    	console.log('retrievedObject: ', JSON.parse(retrievedObject));
	    }
	    else{
		    result.map((e) => 
		    	var id = e.id;
		    	localStorage.clear();
		    	localStorage.setItem('id', JSON.stringify(id));

				this.state = {
					image1:e.display_src,
					name:e.name,
					mv:e.mv,
					bio:e.bio,
			    	youtube:e.youtube,
			    	twitter:e.twitter,
			    	instagram:e.instagram,
			    	facebook:e.facebook
				}
			);
  		}
	}

	state ={

	}

	render(){
		console.log('this', this);
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