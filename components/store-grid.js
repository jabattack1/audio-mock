import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Store from './store.js'

import '../css/normalize.css';
import '../css/skeleton.css';


class StoreGrid extends React.Component {
	state = {

	}
	
	render () {
    	return(
    		<div className='gridWrapperStore'>
	    		<div className='store-grid'>
	    			{this.props.store.map((post, i) => <Store {...this.props} key={i} i={i} store={post} />)}
				</div>
			</div>
    	)
 	 }

}

export default StoreGrid;