import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Cookies from '../components/cookies.js';
import Layout2 from '../components/layout2.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

const cookiePolicy = () => (
	<Layout2>
		<div>
			<Cookies />
		</div>
	</Layout2>
);


export default cookiePolicy;