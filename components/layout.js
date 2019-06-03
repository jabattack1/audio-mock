import Head from 'next/head';
import Navbar from './navbar.js';
import Footer from './footer.js';
import Link from 'next/link';

var total=0;

if (typeof window !== 'undefined') {
	console.log('shine');
    var data = localStorage.getItem('state');
    console.log(data)
    if(data !== 'nothing'){
		var parsedData = JSON.parse(data);
		console.log('parsedData'+parsedData);
		if(parsedData!==null){
			if(parsedData.length<1){
				for(var i in parsedData) {
					total= total + parseInt(parsedData[i].quantity);
			    }
			}
			else{
				total=parseInt(parsedData.quantity);
			}
		}
	}
	console.log('wtf'+total);
}

const Layout = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/msETczs.png' />

	</Head>
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><a className='linkHere'>OVER HERE</a></span> 
		<Link href={`/shopping-cart`}><p className='goToCart'>Shopping Cart{total}</p></Link>
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