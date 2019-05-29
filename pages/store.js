import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Items from '../components/items.js';
import Layout3 from '../components/layout3.js';

import store from '../data/store.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';


const StorePage = (props) => (
	<Layout3>
		<div>
			<Items store={store} code={props.url.query} />
		</div>
	</Layout3>
);


export default StorePage;