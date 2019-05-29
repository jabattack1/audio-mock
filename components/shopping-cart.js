import React, { Component, PropTypes } from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/artist.css';
import '../css/normalize.css';
import '../css/skeleton.css';

class ShoppingCart extends React.Component{

	
	constructor(){

	    super()
	    // console.log('sight');
	    // console.log(this.state);
	    // var myData = localStorage.getItem('state');
	    // console.log(JSON.parse(myData));
	    // this.state={
	   
	    // }
	}

	state={

	}

	render(){

		return(
			<div className='artistArea'>
				
			</div>
		)
	}

	componentDidMount(){

		// let array=[];
	 //    for (var key in this.props) {
	 //    	array.push(this.props[key]);
		// }
	    
	 //    for(var i=0;i<this.props.length;i++){
	 //    	array.push(props[i]);
	 //    }
	 //    if(this.state.length>0){
	 //    	console.log('dog');
		// 	var joined = this.state.myArray.concat(array);
		// }
		// else{
		// 	console.log('cat');
		// 	var joined=array
		// 	this.setState({ myArray: joined })
		// }
		// this.setState({ myArray: joined })
		// console.log(this);

	}

	componentWillUnmount() {
    	// console.log(this.state)
    	// this.state = this.state;

  	}

}

export default ShoppingCart;

