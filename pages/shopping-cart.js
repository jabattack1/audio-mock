import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import ShoppingCart from '../components/shopping-cart.js';
import Layout3 from '../components/layout3.js';

import data from '../data/artistList.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

const ShoppingCartPage = (props) => (
	<Layout3>
		<ul id='shoppingList'>
			<ShoppingCart />
		</ul>
	</Layout3>
);


export default ShoppingCartPage