import React from 'react';
import Head from 'next/head';
import { render } from 'react-dom';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {Link as Clink } from 'react-scroll';
import Link from 'next/link';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';


class Navbar2 extends React.Component {

	constructor(props) {
	    super(props);
	    this.scrollToTop = this.scrollToTop.bind(this);
  	}

	render () {

		var total=0;

		if (typeof window !== 'undefined') {
		    var data = localStorage.getItem('state');
		    if(data !== 'nothing'){
				var parsedData = JSON.parse(data);
				if(parsedData!==null){
					if(parsedData.length!==undefined){
						for(var i in parsedData) {
							total = total + parseInt(parsedData[i].quantity);
					    }
					}
					else{
						total = parseInt(parsedData.quantity);
					}
				}
			}
		}

	    return(
		    <div className="nav">
		    	<ul>
			        <li className="navLinks"><a className='policyNav' href='/'>HOME</a></li>
			        <li className="navLinks"><a className='policyNav' href='/privacy-policy'>PRIVACY POLICY</a></li>
			       	<li className="navLinks"><a className='policyNav' href='/terms-of-use'>TERMS OF USE</a></li>
			        <li className="navLinks"><a className='policyNav' href='/ad-choices'>AD CHOICES</a></li>
			        <li className="navLinks"><a className='policyNav' href='/cookie-policy'>COOKIE POLICY</a></li>
			        <li className="navLinks"><a className='policyNav' href='/jobs'>JOBS</a></li>
		    	</ul>
		    	<Link href={`/shopping-cart`}><span className='goToCart2'><img src='https://i.imgur.com/O4wSpvB.png' className='cartImage' /><p className='cartQuantity'>{total}</p></span>
		    	</Link>
		     	<a className='emailUsLink2' href='mailto:info@audio-boy.com'><img src='https://i.imgur.com/tWjrmNt.png' className='emailUs2'/></a>
		    </div>
	    )
	}

	componentDidMount() {

	    Events.scrollEvent.register('begin', function () {
	    });

	    Events.scrollEvent.register('end', function () {
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

export default Navbar2;