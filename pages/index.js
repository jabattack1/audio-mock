import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Parent from '../components/parent.js'

import '../css/normalize.css';
import '../css/skeleton.css';

class Index extends React.Component {

 	render () {
    	return(
    		<div>   
    			<div class="container">
    				<Parent />
				</div>			
  			</div>
    	)
 	 }

}

export default Index;

