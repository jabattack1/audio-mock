import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/styleStore.css';

class Store extends React.Component{

	render(){

		return(
			<a className="pn-ProductNav_LinkStore" aria-selected="true">
				<figure className='grid-figureStore'>
					<div className='grid-figure-wrapStore'>
						<div alt={this.props.store.code} className='grid-store'>
							<p className='itemName'>{this.props.store.name}</p>
							<img src={this.props.store.display_src} alt={this.props.store.name} className='itemPhoto' />
							<p className='itemPrice'>${this.props.store.price}</p>
						</div>
					</div>
				</figure>
			</a>
		)
	}
}

export default Store;
