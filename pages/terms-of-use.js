import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Terms from '../components/terms.js';
import Layout2 from '../components/layout2';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

const TermsPage = () => (
	<Layout2>
		<div>
			<Terms />
		</div>
	</Layout2>
);


export default TermsPage;