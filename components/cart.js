import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/style.css';
import '../css/shoppingCart.css';


class Cart extends React.Component{
	render(){

		if(this.props.data){
		
			return(
					<li className='cartList'>
						<img className='cartItemImage' src={this.props.data.image1} />
						<p className='cartItemName'>{this.props.data.name}</p>
						<p className='cartItemSize'>{this.props.data.size}</p>
						<p className='cartItemQuantity'>Qty:</p>
						<div className="custom-select">
						  <select className='select-selected'>
						    <option value="1">1</option>
						    <option value="2">2</option>
						    <option value="3">3</option>
						    <option value="4">4</option>
						    <option value="5">5</option>
						    <option value="6">6</option>
						    <option value="7">7</option>
						    <option value="8">8</option>
						    <option value="9">9</option>
						    <option value="10">10</option>
						  </select>
						</div>
					</li>
			)
		}
			return(
					<li className='cartList'>
						<div className='empty'>Your shopping cart is empty</div>
					</li>
			)

	}
}

export default Cart;