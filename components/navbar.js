import React from 'react';
import Head from 'next/head';
import { render } from 'react-dom';
import {DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {Link as Clink } from 'react-scroll';
import Link from 'next/link';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/dropdown.css';


class Navbar extends React.Component {

	constructor(props) {
	    super(props);
	    this.scrollToTop = this.scrollToTop.bind(this);
  	}

	render () {

		var total=0;

		if (typeof window !== 'undefined') {
		    var data = localStorage.getItem('state');
		    console.log('nav1'+data);
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
		        <li className="link"><Clink className='audioLetters' activeClass="active" to="artists" spy={true} smooth={true} duration={500}>ARTISTS</Clink></li>
		        <li className="link"><Clink  className='audioLetters' activeClass="active" to="news" spy={true} smooth={true} duration={500}>NEWS</Clink></li>
		       	<li className="link"><Clink  className='audioLetters' activeClass="active" to="label" spy={true} smooth={true} duration={500}>THE LABEL</Clink></li>
		        <li className="link"><Clink  className='audioLetters' activeClass="active" to="store" spy={true} smooth={true} duration={500}>STORE</Clink></li>
		     	<Link href={`/shopping-cart`}><span className='goToCart1'><img src='https://i.imgur.com/O4wSpvB.png' className='cartImage' /><p className='cartQuantity'>{total}</p></span></Link>
		     	<a className='emailUsLink1' href='mailto:info@audio-boy.com'><img src='https://i.imgur.com/tWjrmNt.png' className='emailUs1'/></a>
		      </ul>
		    </div>
	    )
	}

	dropEmail(){
		console.log('convo');
		document.getElementById('contactDrop').style.display = 'block';
	}

	hideEmail(){
		console.log('convosation');
		document.getElementById('contactDrop').style.display = 'none';
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

