import React from 'react';
import Head from 'next/head';
import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';


class Navbar3 extends React.Component {

	constructor(props) {
	    super(props);

	    this.scrollToTop = this.scrollToTop.bind(this)

	    this.state={
	    	name:props.name
	    }
  	}


	render () {

		var total=0;

		if (typeof window !== 'undefined') {
		    var data = localStorage.getItem('state');
		    console.log(data)
		    if(data !== 'nothing'){
				var parsedData = JSON.parse(data);
				console.log('parsedData'+parsedData);
				if(parsedData!==null){
					if(parsedData.length<1){
						for(var i in parsedData) {
							total= total + parseInt(parsedData[i].quantity);
					    }
					}
					else{
						total=parseInt(parsedData.quantity);
					}
				}
			}
		}
		console.log('wtf'+total);

	    return(
		    <div className="nav3">
		    	<p className="totalLove">{total}</p>
		        <li className="link3"><a className='parrot' href='/'>Home</a></li>
		        <p className="artistHeadLine">{this.state.name}</p>
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

export default Navbar3;