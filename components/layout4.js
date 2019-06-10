import Head from 'next/head';
import Footer3 from './footer3.js';
import Link from 'next/link';

import SignUp from '../components/sign-up.js';

var total=0;



const Layout4 = (props) => (
	<div>
		<Head>
			<title>Audio-Boy</title>
			<link rel='icon' type='image/png' href='https://i.imgur.com/Xc2Et4w.png' />

		</Head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><span className='linkHere' id="myBtn">OVER HERE</span></span>
		</div>
		<div className='containerWrapper'>
			<div className='container'>
				{props.children}
			</div>
		</div>
		<Footer3 />
	</div>
);

export default Layout4;