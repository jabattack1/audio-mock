import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Ads from '../components/ads.js';
import Layout2 from '../components/layout2.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

const AdChoices = () => (
	<Layout2>
		<div>
			<Ads />
		</div>
	</Layout2>
);


export default AdChoices;