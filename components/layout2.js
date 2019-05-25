import Head from 'next/head';
import Navbar2 from './navbar2.js';
import Footer from './footer.js';


const Layout2 = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
	</Head>
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'>OVER HERE</span> 
		</div>
		<Navbar2 />
		<div className='containerWrapper'>
			<div className='container'>
				{props.children}
			</div>
		</div>
		<Footer />
	</div>
);

export default Layout2;