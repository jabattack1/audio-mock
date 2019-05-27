import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import News from './news.js'
import '../scroll.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/style.css';


class NewsGridScroll extends React.Component {
	state = {

	}
	
	render () {
    	return(
    		 <div className="pn-ProductNav_Wrapper">
				<nav id="pnProductNav" className="pn-ProductNav">
				    <div id="pnProductNavContents" className="pn-ProductNav_Contents">
				        {this.props.news.map((post, i) => <News {...this.props} key={i} i={i} news={post} />)}
				    <span id="pnIndicator" className="pn-ProductNav_Indicator"></span>
				    </div>
				</nav>
				    <button id="pnAdvancerLeft" className="pn-Advancer pn-Advancer_Left" type="button">
				    	<img className='leftArrow' src="https://i.imgur.com/uOKhqK5.png" />
				    </button>
				    <button id="pnAdvancerRight" className="pn-Advancer pn-Advancer_Right" type="button">
						<img className='rightArrow' src="https://i.imgur.com/lgw31BS.png" />
				    </button>
			</div>
    	)
 	 }
}

export default NewsGridScroll;
