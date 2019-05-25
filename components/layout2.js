import Head from 'next/head';
import Navbar2 from './navbar2.js';
import Footer2 from './footer2.js';


const Layout2 = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
	</Head>
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><a className='link'>OVER HERE</a></span> 
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