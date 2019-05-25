import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Jobs from '../components/jobs.js';
import Layout2 from '../components/layout2.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';

const jobsLayout = () => (
	<Layout2>
		<div>
			<Jobs />
		</div>
	</Layout2>
);


export default jobsLayout;