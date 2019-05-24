import Head from 'next/head';
import Navbar from './navbar.js';
import Footer from './footer.js';


const Layout = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
	</Head>
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'>OVER HERE</span> 
		</div>
		<Navbar />
		<div className='container'>
			{props.children}
		</div>
		<Footer />
	</div>
);

export default Layout;