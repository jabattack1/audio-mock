import Head from 'next/head';
import Footer2 from './footer2.js';
import Navbar2 from './navbar2.js';
import Link from 'next/link';

const Layout5 = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/Xc2Et4w.png' />

	</Head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<Navbar2 />
		<div className='containerWrapper'>
			<div className='container'>
				{props.children}
			</div>
		</div>
		<Footer2 />
	</div>
);

export default Layout5;
