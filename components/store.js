import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';

class Store extends React.Component{
	render(){

		const {news, i} = this.props.news;

		return(
			<figure className='grid-figureStore'>
				<div className='grid-figure-wrapStore'>
					<div alt={this.props.news.code} className='grid-store'>
						<p className='itemName'>{this.props.store.name}</p>
						<img src={this.props.store.display_src} alt={this.props.store.name} className='itemPhoto' />
						<p className='itemPrice'>${this.props.store.price}</p>
					</div>
				</div>
			</figure>
		)
	}
}

export default Store;