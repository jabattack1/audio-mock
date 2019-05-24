import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import News from './news.js'

import '../css/normalize.css';
import '../css/skeleton.css';


class NewsGrid extends React.Component {
	state = {

	}
	
	render () {
    	return(
    		<div className='gridWrapperNews'>
	    		<div className='news-grid'>
	    			{this.props.news.map((post, i) => <News {...this.props} key={i} i={i} news={post} />)}
				</div>
			</div>
    	)
 	 }

}

export default NewsGrid;