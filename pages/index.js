import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Parent from '../components/parent.js';
import Layout from '../components/layout';

import data from '../data/artistList.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

class Index extends React.Component {

	componentDidMount() {
		this.art = data;
	}

 	render () {
    	return(
    		<Layout>   
    			<Parent artists={data}/>				
  			</Layout>
    	)
 	 }

}

export default Index;

