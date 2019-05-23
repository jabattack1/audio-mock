import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Artists from './artists.js'

import '../css/normalize.css';
import '../css/skeleton.css';


class ArtistsGrid extends React.Component {
	state = {

	}
	
	render () {
    	return(
    		<div className='gridWrapper'>
    			<p className='title'>Artists</p>
	    		<div className='artists-grid'>
	    			{this.props.artists.map((post, i) => <Artists {...this.props} key={i} i={i} artist={post} />)}
				</div>
			</div>
    	)
 	 }

}

export default ArtistsGrid;
