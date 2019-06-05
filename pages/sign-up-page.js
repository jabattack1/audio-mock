import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import SignUp from '../components/sign-up.js';
import Layout5 from '../components/layout5.js';

import store from '../data/store.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';


const SignUpPage = (props) => (
	<Layout5>
		<div>
			<SignUp />
		</div>
	</Layout5>
);


export default SignUpPage;