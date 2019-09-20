import Head from 'next/head';
import Navbar2 from './navbar2.js';
import Footer2 from './footer2.js';
import Link from 'next/link';

import SignUp from '../components/sign-up.js';
// var total=0;

// if (typeof window !== 'undefined') {
// 	console.log('shine');
//     var data = localStorage.getItem('state');
//     console.log(data)
//     if(data !== 'nothing'){
// 		var parsedData = JSON.parse(data);
// 		console.log('parsedData'+parsedData);
// 		if(parsedData!==null){
// 			if(parsedData.length<1){
// 				for(var i in parsedData) {
// 					total= total + parseInt(parsedData[i].quantity);
// 			    }
// 			}
// 			else{
// 				total=parseInt(parsedData.quantity);
// 			}
// 		}
// 	}
// 	console.log('wtf'+total);
// }

const Layout2 = (props) => (
	<div>
	<Head>
		<title>Mock Records</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/Xc2Et4w.png' />

	</Head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><span className='linkHere' id="myBtn">OVER HERE</span></span>
		</div>
		<Navbar2 />
		<div className='containerWrapper'>
			<div className='container'>
			<SignUp />
				{props.children}
			</div>
		</div>
		<Footer2 />
	</div>
);

export default Layout2;