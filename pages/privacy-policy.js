import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Privacy from '../components/privacy.js';
import Layout from '../components/layout';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

const PrivacyPolicy = () => (
	<Layout>
		<div>
			<Privacy />
		</div>
	</Layout>
);


export default PrivacyPolicy;