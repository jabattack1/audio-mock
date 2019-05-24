import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Terms from '../components/terms.js';
import Layout from '../components/layout';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

const TermsPage = () => (
	<Layout>
		<div>
			<Terms />
		</div>
	</Layout>
);


export default TermsPage;