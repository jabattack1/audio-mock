import React from 'react';
import Head from 'next/head';
import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';


class Navbar extends React.Component {

	constructor(props) {
	    super(props);
	    this.scrollToTop = this.scrollToTop.bind(this);
  	}

	render () {
	    return(
		    <div className="nav">
		      <ul>
		        <li className="ArtistsLink"><Link activeClass="active" to="artists" spy={true} smooth={true} duration={500}>Artists</Link></li>
		        <li className="NewsLink"><Link activeClass="active" to="news" spy={true} smooth={true} duration={500}>News</Link></li>
		       	<li className="aboutLink"><Link activeClass="active" to="label" spy={true} smooth={true} duration={500}>The Label</Link></li>
		        <li className="storeLink"><Link activeClass="active" to="store" spy={true} smooth={true} duration={500}>Store</Link></li>
		        <li className="contactLink"><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
		      </ul>
		    </div>
	    )
	}

	componentDidMount() {

	    Events.scrollEvent.register('begin', function () {
	      console.log("begin", arguments);
	    });

	    Events.scrollEvent.register('end', function () {
	      console.log("end", arguments);
	    });

	}

	scrollToTop() {
	    scroll.scrollToTop();
	}

	scrollTo() {
	    scroller.scrollTo('scroll-to-element', {
	      duration: 800,
	      delay: 0,
	      smooth: 'easeInOutQuart'
	    })
	}

	scrollToWithContainer() {
		
	    let goToContainer = new Promise((resolve, reject) => {

	    	Events.scrollEvent.register('end', () => {
	        	resolve();
	        	Events.scrollEvent.remove('end');
	      	});

	      	scroller.scrollTo('scroll-container', {
	        	duration: 800,
	        	delay: 0,
	        	smooth: 'easeInOutQuart'
	      	});
	    });

	    goToContainer.then(() =>
	    	scroller.scrollTo('scroll-container-second-element', {
	        duration: 800,
	        delay: 0,
	        smooth: 'easeInOutQuart',
	        containerId: 'scroll-container'
	    }));
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
	    Events.scrollEvent.remove('end');
	}

}

export default Navbar;

