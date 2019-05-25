import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/artist.css';
import '../css/normalize.css';
import '../css/skeleton.css';

class Auditory extends React.Component{

	
	constructor(props){

	    super(props)

	    let data = props.artist.find(i => i.code === 'abcd');
	   
		this.state = {
			image1:data.display_src,
			name:data.name,
			mv:data.mv,
			bio:data.bio
		}
  
	}

	state ={

	}

	render(){

		return(
			<div className='artistArea'>
				<div className='artistBackground'>
					<img src={this.state.image1} className='artistMainPhoto' />  
					<div className='bio'>{this.state.bio}</div>  
					<iframe className='artistVideo' src={this.state.mv} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
			</div>
		)
	}
}

export default Auditory;