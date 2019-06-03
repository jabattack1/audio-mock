import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Store from './store.js';
import ShoppingCart from './shopping-cart.js';

import '../css/normalize.css';
import '../css/skeleton.css';


class StoreGrid extends React.Component {
	state = {

	}
	
	render () {
    	return(
    		<div className='storeWrapper'>
	    		<div className='storeBox'>
	    			{this.props.store.map((post, i) => <Store {...this.props} key={i} i={i} store={post} />)}
				</div>
			</div>
    	)
 	 }

}

export default StoreGrid;