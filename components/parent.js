import React from 'react';
import Head from 'next/head';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import styled from 'styled-components';

import ArtistsGrid from './artists-grid.js';
import NewsGrid from './news-grid.js';
import AboutLabel from './about-label.js';
import StoreGrid from './store-grid.js';
import Contact from './contact.js';

import NewsGridScroll from './news-grid-scroll.js';
import StoreGridScroll from './store-grid-scroll.js';

import SignUp from '../components/sign-up.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/mobile.css';
import '../css/scroller.css';


class Parent extends React.Component {

	constructor(props){

		super(props)

	}



	render () {
    	return(
    		<div>
	    		<div className="container">
				    <div className="row">
				      	<div className="one-half column">
				        	<div className='bannerWrapper'>
				          		<div className="image123">
				            		<div className="imgContainer">
				            			<img className='frontLogo' />
				            				<div className='mobileLogo'>
												<div id='bannerSideMobile' className="crt">
													<div className="example3">
														<h3><img src="https://i.imgur.com/SMLpXaX.png" id='auditorySignMoonScroller' /><br/><br/><span id='scrollerSun'>I Don't Want to Go And See The Sun</span><br/><br/>IN STORES NOW<br/><br/>iTunes<br/>Wherever else<br/>Spotify<br/>Google Play</h3>
													</div>
												</div>
													<div id='bannerSunMobile' hidden>
												 	<img src='https://i.imgur.com/QEuTfm8.gif' id='spaceDropMobile' />
													<img src="https://i.imgur.com/SMLpXaX.png" id='auditorySignMoon' />
													<h1 id='sunMoon'>I DON'T WANT TO GO AND SEE THE SUN</h1>
													<img src="https://i.imgur.com/imjFfzu.png" id='singleSunMobile'/>
													<div id='moonWrapper'>
													 	<img src='https://i.imgur.com/aFP9ONd.gif' id='moonMobile' />
													</div>
												</div>
											</div>
				            		</div>
				            		<div className="tech-slideshow">
				            			<div className='bannerSun'>
					 						<img src='https://i.imgur.com/QEuTfm8.gif' className='spaceDrop' />
					 						<img src="https://i.imgur.com/SMLpXaX.png" className='auditorySign' />
					 						<div className='moon'></div>
					 						<img src="https://i.imgur.com/imjFfzu.png" className='singleSun'/>
					 						<h1 className='sun'>I DON'T WANT TO GO AND SEE THE SUN</h1>
										</div>
				            		</div>   
				          		</div>
				        	</div>
				        	<div className='titleWrapper' id='artistWrapper'>
				        	    <Element name="artists" className="element">Artists</Element>
	    					</div>
				        	<div>
				        		<ArtistsGrid {...this.props}/>
				        	</div>
				        	<div className='artistNewsSpacer'>
				        	</div>
				        	<div className='titleWrapper' id='newsWrapper'>
	    						<Element name="news" className="element">News - <span className='small'>Scroll Right to See More</span></Element>
	    					</div>
	    					<div>
				        		<NewsGridScroll {...this.props} />
				        	</div>
				        	<div className='newsLabelSpacer'>
				        	</div>
				        	<div className='titleWrapper' id='aboutWrapper'>
	    						<Element id='labelHeader' name="label" className="element">The Label</Element>
	    					</div>
	    					<div>
				        		<AboutLabel/>
				        	</div>
				        	<div className='storeContactSpacer'>
				        	</div>
							<div className='titleWrapper' id='storeWrapper'>
	    						<Element id='storeHeader' name="store" className="element">Store</Element>
	    					</div>
	    					<div>
				        		<StoreGrid{...this.props} />
				        	</div>
				        	<div className='storeContactSpacer'>
				        	</div>
				      	</div>
				    </div>
				</div>
			</div>
    	)
 	}

}

export default Parent;
