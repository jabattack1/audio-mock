import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Jobs from '../components/jobs.js';
import Layout from '../components/layout';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

const jobsLayout = () => (
	<Layout>
		<div>
			<Jobs />
		</div>
	</Layout>
);


export default jobsLayout;