import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import styled from 'styled-components';

import Cart from './cart.js'
import StoreGrid from './store-grid.js';
import Navbar3 from './navbar3.js';

import store from '../data/store.js';

import '../css/artist.css';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/shoppingCart.css';

var up;

class ShoppingCart extends React.Component{

	
	constructor(){
	    super()

	    if (typeof localStorage === "undefined" || localStorage.getItem('state') === null) {
		  	this.state = {
				data:'',
				total:'0.00',
				shipping:'0.00',
				tax:'0.00',
				totalAmount:'0.00'
			}
		}
		else if(localStorage.getItem('state') === 'nothing'){
		  	this.state = {
				data:'',
				total:'0.00',
				shipping:'0.00',
				tax:'0.00',
				totalAmount:'0.00'
			}
		}
	    else if(localStorage.getItem('state')!== null && localStorage.getItem('state') !== 'nothing'){
	    	var data = localStorage.getItem('state');
		    let parsedData = JSON.parse(data);

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
							<li className='finalBoxPromo' id='boxPromo'>Do you have a promo code?<img id='promoArrow' onClick={this.showPromo} src='https://i.imgur.com/vp4niLu.png' /><img className='questionMarkSub' id='popQuestion' onClick={this.showPopup} src='https://i.imgur.com/y6GROgd.png' /><div id='popup' hidden>If you are having trouble, please check the Terms & Conditions of the promotion, which are usually found by clicking "See Details" where the promotion was found online or in the footer of the email or mail.</div><div id='promoField' hidden><input id='promoForm' type='text'/><button className='promoButton' type="submit">APPLY</button></div></li>
							<li className='finalBoxSubtotal'>Subtotal<img className='questionMarkSub' id='popQuestion1' onClick={this.showPopup1} src='https://i.imgur.com/y6GROgd.png' /><div id='popup1' hidden>The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes.</div><p className='priceTotal'>{this.state.total}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxShipping'>Estimated Shipping & Handling<p className='priceTotal'>{this.state.shipping}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTax'>Estimated Tax<img className='questionMarkSub' src='https://i.imgur.com/y6GROgd.png' id='popQuestion2' onClick={this.showPopup2}/><div id='popup2' hidden>The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped.</div><p className='priceTotal'>{this.state.tax}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTotal'>Total<p className='priceTotal'>{this.state.totalAmount}</p><span className='finalBoxDollarSign'>$</span></li>									
						</ul>
						<button className='checkoutButton' type="submit">SECURE CHECKOUT</button>
					</div>
					<div className='titleWrapper'>
	    				<Element id='labelHeader' name="label" className="element">You Might Also Like</Element>
	    			</div>
					<StoreGrid store={store} />
				</div>
			)
		}

		else if(this.state.data.length == undefined){
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
							<li className='finalBoxPromo' id='boxPromo'>Do you have a promo code?<img id='promoArrow' onClick={this.showPromo} src='https://i.imgur.com/vp4niLu.png' /><img className='questionMarkSub' id='popQuestion' onClick={this.showPopup} src='https://i.imgur.com/y6GROgd.png' /><div id='popup' hidden>If you are having trouble, please check the Terms & Conditions of the promotion, which are usually found by clicking "See Details" where the promotion was found online or in the footer of the email or mail.</div><div id='promoField' hidden><input id='promoForm' type='text'/><button className='promoButton' type="submit">APPLY</button></div></li>
							<li className='finalBoxSubtotal'>Subtotal<img className='questionMarkSub' id='popQuestion1' onClick={this.showPopup1} src='https://i.imgur.com/y6GROgd.png' /><div id='popup1' hidden>The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes.</div><p className='priceTotal'>{this.state.total}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxShipping'>Estimated Shipping & Handling<p className='priceTotal'>{this.state.shipping}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTax'>Estimated Tax<img className='questionMarkSub' src='https://i.imgur.com/y6GROgd.png' id='popQuestion2' onClick={this.showPopup2}/><div id='popup2' hidden>The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped.</div><p className='priceTotal'>{this.state.tax}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTotal'>Total<p className='priceTotal'>{this.state.totalAmount}</p><span className='finalBoxDollarSign'>$</span></li>
						</ul>
						<button className='checkoutButton' type="submit">SECURE CHECKOUT</button>
					</div>
					<div className='titleWrapper'>
	    				<Element id='labelHeader' name="label" className="element">You Might Also Like</Element>
	    			</div>
					<StoreGrid store={store} />
				</div>
			)
		}
		else{
			return(
				<div className='shoppingCartArea'>
					<Navbar3 name='Shopping Cart' />
					<Link href={`/shopping-cart`}><p className='goToCartFromCart' onClick={this.clear}>Delete All Items</p></Link>
					<ul className='shopCart'>
					{this.state.data.map((data, i) => <Cart {...this.parsedData} key={i} i={i} data={data} />)}		
					</ul>
					<div className='finalBox'>
						<p className='finalBoxHeading'>SUMMARY</p>
						<ul className='allTheNumber'>
							<li className='finalBoxPromo' id='boxPromo'>Do you have a promo code?<img id='promoArrow' onClick={this.showPromo} src='https://i.imgur.com/vp4niLu.png' /><img className='questionMarkSub' id='popQuestion' onClick={this.showPopup} src='https://i.imgur.com/y6GROgd.png' /><div id='popup' hidden>If you are having trouble, please check the Terms & Conditions of the promotion, which are usually found by clicking "See Details" where the promotion was found online or in the footer of the email or mail.</div><div id='promoField' hidden><input id='promoForm' type='text'/><button className='promoButton' type="submit">APPLY</button></div></li>
							<li className='finalBoxSubtotal'>Subtotal<img className='questionMarkSub' id='popQuestion1' onClick={this.showPopup1} src='https://i.imgur.com/y6GROgd.png' /><div id='popup1' hidden>The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes.</div><p className='priceTotal'>{this.state.total}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxShipping'>Estimated Shipping & Handling<p className='priceTotal'>{this.state.shipping}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTax'>Estimated Tax<img className='questionMarkSub' src='https://i.imgur.com/y6GROgd.png' id='popQuestion2' onClick={this.showPopup2}/><div id='popup2' hidden>The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped.</div><p className='priceTotal'>{this.state.tax}</p><span className='finalBoxDollarSign'>$</span></li>
							<li className='finalBoxTotal'>Total<p className='priceTotal'>{this.state.totalAmount}</p><span className='finalBoxDollarSign'>$</span></li>
						</ul>
						<button className='checkoutButton' type="submit">SECURE CHECKOUT</button>
					</div>
					<div className='titleWrapper'>
	    				<Element id='labelHeader' name="label" className="element">You Might Also Like</Element>
	    			</div>
					<StoreGrid store={store} />
				</div>
			)
		}
	}

	clear(){
		localStorage.clear();
		location.reload();
		localStorage.setItem('state','nothing');
	}


	componentDidMount(){
		document.body.addEventListener('click', this.twoClicks);
		document.getElementById("popup1").style.display = "none";
		document.getElementById("popup2").style.display = "none";
		if(localStorage.getItem('state') !== null && localStorage.getItem('state') !== 'nothing'){
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
			console.log('lion');
			this.setState({total:total.toFixed(2), shipping:shipping.toFixed(2), tax:tax.toFixed(2), totalAmount:totalAmount.toFixed(2)});
		}

	}


	showPopup(){
			var x = document.getElementById("popup");
			var y = document.getElementById("popup1");
			var z = document.getElementById("popup2");
			if (x.style.display === "none") {
			    x.style.display = "block";
			    y.style.display = "none";
			    z.style.display = "none";
			} 
			else {
			    x.style.display = "none";
			}
	}

	showPopup1(){
			var x = document.getElementById("popup");
			var y = document.getElementById("popup1");
			var z = document.getElementById("popup2");
			if (y.style.display === "none") {
			    y.style.display = "block";
			    x.style.display = "none";
			    z.style.display = "none";
			} 
			else {
			    y.style.display = "none";
			}
	}

	showPopup2(){
			var x = document.getElementById("popup");
			var y = document.getElementById("popup1");
			var z = document.getElementById("popup2");
			if (z.style.display === "none") {
			    z.style.display = "block";
			    x.style.display = "none";
			    y.style.display = "none";
			} 
			else {
			    z.style.display = "none";
			}
	} 

	showPromo(){
		var box = document.getElementById('boxPromo');
  		var icon = document.getElementById('promoArrow');
  		var promo = document.getElementById('promoField');
		if(up===true){
			promo.className = 'promoUp';
			icon.className = 'fa-arrow-down'; 
		    up=false; 
		    // promo.style.display = "none";
		} 
		else{
		    promo.className = 'promoDown';
		    icon.className = 'fa-arrow-up';
		    promo.style.display = "block";
		    up=true; 
		}
	}

 	// twoClicks(){
 	// 	// console.log('twos');
 	// 	var x = document.getElementById("popup1");
 	// 	var y = document.getElementById("popup2");
 	// 	// console.log(y.style.display);
		// if (x.style.display === "block") {
		// 	x.style.display = "none";
		// } 
		// else{
		// 	x.style.display = "none";
		// }
		// if(y.style.display === "block") {
		// 	y.style.display = "none";
		// } 
		// else{
		// 	y.style.display = "none";
		// }
 	// }

}

export default ShoppingCart;

