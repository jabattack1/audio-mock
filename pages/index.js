import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Parent from '../components/parent.js';
import Layout from '../components/layout';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

class Index extends React.Component {

 	render () {
    	return(
    		<Layout>   
    			<Parent />				
  			</Layout>
    	)
 	 }

}

export default Index;

