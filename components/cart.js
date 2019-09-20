import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Head from 'next/head';
import Link from 'next/link';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/style.css';
import '../css/shoppingCart.css';


class Cart extends React.Component{
	render(){
		// console.log(this.props.data);
		if(this.props.data){
			
			return(
					<li className='cartList'>
						<a href={`/store?code=${this.props.data.code}`}>
						<div className='cartItemImageContainer'>
							<img className='cartItemImage' src={this.props.data.image1} />
						</div>
						<p className='cartItemName'>{this.props.data.name}</p>
						</a>
						<p className='cartItemSize'>{this.props.data.size}</p>
						<p className='cartItemQuantity'>Quantity</p>
						<div className="custom-select">
						  <select className='select-selected' id='quantity' onMouseOver={this.setQuantity} defaultValue={this.props.data.quantity}>
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
						<p className='cartItemPrice'><span>$</span>{this.props.data.price}</p>
						<p className='cartItemOrigPrice' hidden>{this.props.data.orig}</p>
						<p className='deleteItem' id='x' onMouseOver={this.deleteItem}>Remove</p>
					</li>
			)
		}
		else{
			return(
				<div>
					<p className='empty'>Your shopping cart is empty.</p>
				</div>
			)
		}

	}

	setQuantity(){
		"use strict";
		var items = document.querySelectorAll(".cartList");
		var myData = localStorage.getItem('state');
		var data = JSON.parse(myData)

		for (var k=0; k<items.length; k++) {
		    items[k].index = k;
		    let selected = items[k];
		    var selectOption = items[k].children[3];
		    selectOption.addEventListener("change", function () {
		    	let id = selected.index;
		        if(data.length === undefined){
		        	console.log('oneA');
		        	data.quantity = selected.children[3].children[0].value;
		        	var multiple = selected.children[3].children[0].value;
		        	console.log(multiple);
					var total = multiple * selected.children[5].innerHTML.replace(/[$]/g,"");;
					data.price = total.toFixed(2);
		        	localStorage.clear();
					localStorage.setItem('state',JSON.stringify(data));
					location.reload();
		        }
		        else if(data.length === 1){
		        	console.log('oneB');
		        	data[0].quantity = selected.children[3].children[0].value;
		        	var multiple = selected.children[3].children[0].value;
		        	console.log(multiple);
					var total = multiple * selected.children[5].innerHTML.replace(/[$]/g,"");;
					data[0].price = total.toFixed(2);
		        	localStorage.clear();
					localStorage.setItem('state',JSON.stringify(data));
					location.reload();
		        }
		        else{
					for(var i = 0;i<data.length;i++) {
					    if(i === id) {
					        console.log('two or more');
					        // var items = document.querySelectorAll(".cartList");
					        data[i].quantity = items[i].children[3].children[0].value;
					        var multiple = items[i].children[3].children[0].value;
					        var total = multiple * items[i].children[5].innerHTML.replace(/[$]/g,"");;
					        data[i].price = total.toFixed(2);
					        localStorage.clear();
					        localStorage.setItem('state',JSON.stringify(data));
					        location.reload();
					    }
					}
				}
		    });
		};

	}

	deleteItem(){
		"use strict";
		var items = document.querySelectorAll(".cartList");
		var myData = localStorage.getItem('state');
		let data = JSON.parse(myData)

		for (var i=0; i<items.length; i++) {
		    items[i].index = i;
		    var deleteButton = items[i].children[7];
		    let ufo = items[i];
		    deleteButton.addEventListener("click", function (e) {
		        let id = ufo.index;
		        if(data.length === undefined || data.length === 1){
		        	localStorage.clear();
		        	location.reload();
		        }
		        else{
					for(var i = 0;i<data.length;i++) {
					    if(i === id) {
					        var s = data.splice(i, 1);
					        localStorage.clear();
					        localStorage.setItem('state',JSON.stringify(data));
					        location.reload();
					    }
					}
				}
		    });
		};

	}


}

export default Cart;