import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';


class Parent extends React.Component {

	state = {

	}
	
	render () {
    	return(
    		<div class="container">
			    <div class="row">
			      	<div class="one-half column">
			        	<div class='bannerWrapper'>
			          		<div class="image123">
			            		<div class="imgContainer">
			            			<img class='frontLogo' />
			            		</div>
			            		<div class="tech-slideshow">
			            			<div class="mover-1"></div>
			                		<div class="mover-2"></div>
			            		</div>   
			          		</div>
			        	</div>
			      	</div>
			    </div>
			</div>
    	)
 	 }

}

export default Parent;
