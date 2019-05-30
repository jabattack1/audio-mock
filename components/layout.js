import Head from 'next/head';
import Navbar from './navbar.js';
import Footer from './footer.js';
import Link from 'next/link';


const Layout = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/msETczs.png' />

	</Head>
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><a className='linkHere'>OVER HERE</a></span> <Link href={`/shopping-cart`}><p className='goToCart'>Shopping Cart</p></Link>
		</div>
		<Navbar />
		<div className='containerWrapper'>
			<div className='container'>
				{props.children}
			</div>
		</div>
		<Footer />
	</div>
);

export default Layout;