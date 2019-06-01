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

	    if (typeof localStorage === "undefined" || localStorage.getItem('state') === null) {
	    	console.log('undefined');
		  	this.state = {
				data:'',
				total:'0.00',
				shipping:'0.00',
				tax:'0.00',
				totalAmount:'0.00'
			}
		}
	    else if(localStorage.getItem('state')!== null && localStorage.getItem('state') !== 'nothing'){
	    // localStorage.clear();
	    	var data = localStorage.getItem('state');
		    let parsedData = JSON.parse(data);
		    console.log('steph');
		    console.log(parsedData);
			this.state = {
				data:parsedData,
				total:'',
				shipping:9.99,
				tax:'',
				totalAmount:''
			}		
		}
		else{
			this.state = {
				data:'',
				total:'',
				shipping:9.99,
				tax:'',
				totalAmount:''
			}
		}
	}

	state={

	}

	render(){
		console.log(this.state);
		if(this.state.data === ''){
			return(
				<div className='shoppingCartArea'>
					<Navbar3 name='Shopping Cart' />
					<Link href={`/shopping-cart`}><p className='goToCartFromCart' onClick={this.clear}>Delete All Items</p></Link>
					<ul className='ah'>
						<Cart />		
					</ul>
					<div className='finalBox'>
						<p className='finalBoxHeading'>SUMMARY</p>
						<ul className='allTheNumber'>
							<li className='finalBoxSubtotal'>Subtotal<p className='priceTotal'>{this.state.total}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxShipping'>Estimated Shipping & Handling<p className='priceTotal'>{this.state.shipping}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTax'>Estimated Tax<p className='priceTotal'>{this.state.tax}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTotal'>Tota<p className='priceTotal'>{this.state.totalAmount}</p><span className='finalBoxDollarSign'>$</span>l</li>
						</ul>
					</div>
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
					<div className='finalBox'>
						<p className='finalBoxHeading'>SUMMARY</p>
						<ul className='allTheNumber'>
							<li className='finalBoxSubtotal'>Subtotal<p className='priceTotal'>{this.state.total}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxShipping'>Estimated Shipping & Handling<p className='priceTotal'>{this.state.shipping}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTax'>Estimated Tax<p className='priceTotal'>{this.state.tax}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTotal'>Tota<p className='priceTotal'>{this.state.totalAmount}</p><span className='finalBoxDollarSign'>$</span>l</li>
						</ul>
					</div>
				</div>
			)
		}
		else{
			return(
				<div className='shoppingCartArea'>
					<Navbar3 name='Shopping Cart' />
					<Link href={`/shopping-cart`}><p className='goToCartFromCart' onClick={this.clear}>Delete All Items</p></Link>
					<ul>
					{this.state.data.map((data, i) => <Cart {...this.parsedData} key={i} i={i} data={data} />)}		
					</ul>
					<div className='finalBox'>
						<p className='finalBoxHeading'>SUMMARY</p>
						<ul className='allTheNumber'>
							<li className='finalBoxSubtotal'>Subtotal<p className='priceTotal'>{this.state.total}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxShipping'>Estimated Shipping & Handling<p className='priceTotal'>{this.state.shipping}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTax'>Estimated Tax<p className='priceTotal'>{this.state.tax}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTotal'>Tota<p className='priceTotal'>{this.state.totalAmount}</p><span className='finalBoxDollarSign'>$</span>l</li>
						</ul>
					</div>
				</div>
			)
		}
	}

	clear(){
		// console.log('famicon');
		localStorage.clear();
		location.reload();
		localStorage.setItem('state','nothing');
	}

	componentDidMount(){
		if(localStorage.getItem('state') !== null ){
			var items = document.querySelectorAll(".cartList");
			let total = 0;
			let totalQuantity = 0;
			var baseShipping = this.state.shipping;
			for (var i=0; i<items.length; i++) {
				var prices = parseFloat(items[i].children[5].innerHTML);
				total = total+prices;
			};
			for (var i=0; i<items.length; i++) {
				var quantity = parseInt(items[i].children[3].children[0].value);
				totalQuantity = totalQuantity + quantity;
			};
			var shipping = ((totalQuantity/3) * 4.49)+baseShipping;
			var tax = total*.0725
			var totalAmount = (total+shipping)+tax;
			this.setState({total:total.toFixed(2), shipping:shipping.toFixed(2), tax:tax.toFixed(2), totalAmount:totalAmount.toFixed(2)});
		}
	}
	 
}

export default ShoppingCart;

