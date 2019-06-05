import Head from 'next/head';
import Footer2 from './footer2.js';
import Navbar3 from './navbar3.js';
import Link from 'next/link';

const Layout5 = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/Xc2Et4w.png' />
	</Head>
		<Navbar3 />
		<div className='containerWrapper'>
			<div className='container'>
				{props.children}
			</div>
		</div>
		<Footer2 />
	</div>
);

export default Layout5;
