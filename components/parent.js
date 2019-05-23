import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import ArtistsGrid from './artists-grid.js';

import '../css/normalize.css';
import '../css/skeleton.css';


class Parent extends React.Component {

	constructor(props){

		super(props)

		
		// const newData = props.artists.map((artist, i) =>
		//       ({
		// 		code: artist.code,
		// 	    name: artist.name,
		// 	    id: artist.id,
		// 	    display_src: artist.display_src
		//       }));
		//       this.setState({
		//           data: newData
		//       })
	}



	render () {
    	return(
    		<div className="container">
			    <div className="row">
			      	<div className="one-half column">
			        	<div className='bannerWrapper'>
			          		<div className="image123">
			            		<div className="imgContainer">
			            			<img className='frontLogo' />
			            		</div>
			            		<div className="tech-slideshow">
			            			<div className="mover-1"></div>
			                		<div className="mover-2"></div>
			            		</div>   
			          		</div>
			        	</div>
			        	<div>
			        		<ArtistsGrid {...this.props}/>
			        	</div>
			      	</div>
			    </div>
			</div>
    	)
 	 }

}

export default Parent;
