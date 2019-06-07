import Head from 'next/head';
import Footer2 from './footer2.js';
import Link from 'next/link';

import SignUp from '../components/sign-up.js';

const Layout3 = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/Xc2Et4w.png' />

	</Head>
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><span className='linkHere' id="myBtn">OVER HERE</span></span>
		</div>
		<div className='containerWrapper'>
			<div className='container'>
			<SignUp />
				{props.children}
			</div>
		</div>
		<Footer2 />
	</div>
);

export default Layout3;