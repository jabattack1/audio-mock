import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Privacy from '../components/privacy.js';
import Layout2 from '../components/layout2.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

const PrivacyPolicy = () => (
	<Layout2>
		<div>
			<Privacy />
		</div>
	</Layout2>
);


export default PrivacyPolicy;