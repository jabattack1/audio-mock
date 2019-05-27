import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Parent from '../components/parent.js';
import Layout from '../components/layout';

import data from '../data/artistList.js';
import newsData from '../data/news.js';
import store from '../data/store.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/styleStore.css';

class Index extends React.Component {

	componentDidMount() {
		this.art = data;
		this.news = newsData;
		this.store = store;
	}

 	render () {

    	return(
    		<Layout>   
    			<Parent artists={data} news={newsData} store={store}/>				
  			</Layout>
    	)
 	 }

}

export default Index;

