import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';

class News extends React.Component{
	render(){

		const {news, i} = this.props.news;

		return(
			<figure className='grid-figureNews'>
				<div className='grid-figure-wrapNews'>
					<div alt={this.props.news.code} className='grid-news'>
						<div className='newsDate'>{this.props.news.date}</div>
						<div className='newsHeadline'>{this.props.news.headline}</div>
						<div className='newsContent'>{this.props.news.content}</div>
					</div>
				</div>
			</figure>
		)
	}
}

export default News;