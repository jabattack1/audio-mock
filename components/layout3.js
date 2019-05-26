import Head from 'next/head';
import Footer2 from './footer2.js';


const Layout3 = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
	</Head>
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><a className='linkHere'>OVER HERE</a></span> 
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