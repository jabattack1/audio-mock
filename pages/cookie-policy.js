import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Cookies from '../components/cookies.js';
import Layout from '../components/layout';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

const cookiePolicy = () => (
	<Layout>
		<div>
			<Cookies />
		</div>
	</Layout>
);


export default cookiePolicy;