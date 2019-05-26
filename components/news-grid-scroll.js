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
				        <svg className="pn-Advancer_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024"><path d="M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z"/></svg>
				    </button>
				    <button id="pnAdvancerRight" className="pn-Advancer pn-Advancer_Right" type="button">
				        <svg className="pn-Advancer_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551 1024"><path d="M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z"/></svg>
				    </button>
			</div>
    	)
 	 }

}

export default NewsGridScroll;
