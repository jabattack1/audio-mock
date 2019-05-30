import Head from 'next/head';
import Navbar2 from './navbar2.js';
import Footer2 from './footer2.js';
import Link from 'next/link';


const Layout2 = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/msETczs.png' />

	</Head>
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><a className='linkHere'>OVER HERE</a></span> <Link href={`/shopping-cart`}><p className='goToCart'>Shopping Cart</p></Link>
		</div>
		<Navbar2 />
		<div className='containerWrapper'>
			<div className='container'>
				{props.children}
			</div>
		</div>
		<Footer2 />
	</div>
);

export default Layout2;