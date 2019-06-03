import Head from 'next/head';
import Footer2 from './footer2.js';
import Link from 'next/link';

var total=0;

if (typeof window !== 'undefined') {
	console.log('shine');
    var data = localStorage.getItem('state');
	var parsedData = JSON.parse(data);
	console.log(parsedData);
	for(var i in parsedData) {
	 total= total + parseInt(parsedData[i].quantity);
    }
}

const Layout3 = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/msETczs.png' />

	</Head>
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><a className='linkHere'>OVER HERE</a></span>
		<Link href={`/shopping-cart`}><p className='goToCart'>Shopping Cart{total}</p></Link>
		</div>
		<div className='containerWrapper'>
			<div className='container'>
				{props.children}
			</div>
		</div>
		<Footer2 />
	</div>
);

export default Layout3;