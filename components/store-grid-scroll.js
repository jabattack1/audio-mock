import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Store from './store.js'

import '../scrollStore.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/styleStore.css';


class StoreGridScroll extends React.Component {
	
	render () {
    	return(
    		<div className="pn-ProductNav_WrapperStore">
				<nav id="pnProductNavStore" className="pn-ProductNavStore">
				    <div id="pnProductNavContentsStore" className="pn-ProductNav_ContentsStore">
				        {this.props.store.map((post, i) => <Store {...this.props} key={i} i={i} store={post} />)}
				    <span id="pnIndicatorStore" className="pn-ProductNav_IndicatorStore"></span>
				    </div>
				</nav>
				    <button id="pnAdvancerLeftStore" className="pn-AdvancerStore pn-Advancer_LeftStore" type="button">
				    	<img className='leftArrowStore' src="https://i.imgur.com/uOKhqK5.png" />
				    </button>
				    <button id="pnAdvancerRightStore" className="pn-AdvancerStore pn-Advancer_RightStore" type="button">
						<img className='rightArrowStore' src="https://i.imgur.com/lgw31BS.png" />
				    </button>
			</div>
    	)
 	 }

}

export default StoreGridScroll;


