import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import Auditory from '../components/auditory.js';
import Layout3 from '../components/layout3.js';

import data from '../data/artistList.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/bootstrap.css';
console.log(data);

const AuditoryPage = () => (
	<Layout3>
		<div>
			<Auditory artist={data} />
		</div>
	</Layout3>
);


export default AuditoryPage;