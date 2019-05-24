import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Ads from '../components/ads.js';
import Layout from '../components/layout';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

const AdChoices = () => (
	<Layout>
		<div>
			<Ads />
		</div>
	</Layout>
);


export default AdChoices;