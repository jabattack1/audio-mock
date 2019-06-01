import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styled from 'styled-components';

import Cart from './cart.js'

import Navbar3 from './navbar3.js';

import '../css/artist.css';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/shoppingCart.css';

class ShoppingCart extends React.Component{

	
	constructor(){

	    super()
	    if (typeof localStorage === "undefined") {
		  	this.state = {
				data:''
			}
		}
	    else if(localStorage.getItem('state')!== null && localStorage.getItem('state') !== 'nothing'){
	    // localStorage.clear();
	    	var data = localStorage.getItem('state');
		    let parsedData = JSON.parse(data);
		    // console.log('steph');
		    // console.log(parsedData);
			this.state = {
				data:parsedData
			}		
		}
		else{
			this.state = {
				data:''
			}
		}
	}

	state={

	}

	render(){
		if(this.state.data === ''){
			return(
				<div className='shoppingCartArea'>
					<Navbar3 name='Shopping Cart' />
					<Link href={`/shopping-cart`}><p className='goToCartFromCart' onClick={this.clear}>Delete All Items</p></Link>
					<ul className='ah'>
						<Cart />		
					</ul>
				</div>
			)
		}

		else if(this.state.data.length == undefined){
			console.log('loca');
			return(
				<div className='shoppingCartArea'>
					<Navbar3 name='Shopping Cart' />
					<Link href={`/shopping-cart`}><p className='goToCartFromCart' onClick={this.clear}>Delete All Items</p></Link>
					<ul>
						<Cart key='1' i='1' data={this.state.data}/>		
					</ul>
				</div>
			)
		}
		else{
			console.log('Titacion');
			return(
				<div className='shoppingCartArea'>
					<Navbar3 name='Shopping Cart' />
					<Link href={`/shopping-cart`}><p className='goToCartFromCart' onClick={this.clear}>Delete All Items</p></Link>
					<ul>
					{this.state.data.map((data, i) => <Cart {...this.parsedData} key={i} i={i} data={data} />)}		
					</ul>
				</div>
			)
		}
	}

	clear(){
		console.log('famicon');
		localStorage.clear();
		location.reload();
		localStorage.setItem('state','nothing');
		console.log(localStorage.getItem('state'));
	}
	 
}

export default ShoppingCart;

