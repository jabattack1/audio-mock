import Head from 'next/head';
import Navbar from './navbar.js';
import Footer from './footer.js';
import Link from 'next/link';

import SignUp from '../components/sign-up.js';
import Layout5 from '../components/layout5.js';

const Layout = (props) => (
	<div>
	<Head>
		<title>Audio-Boy</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/Xc2Et4w.png' />

	</Head>
		<div id="load"></div>
		<div id='heat'>
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><span className='linkHere' id="myBtn" >OVER HERE</span></span> 
		</div>
		<Navbar />
		<div className='containerWrapper' id='parentContainer'>
			<div className='container'>
			<SignUp />
				{props.children}
			</div>
		</div>
		<Footer />
	</div>
	</div>
);

// if (process.browser){
// document.onreadystatechange = function () {
//   var state = document.readyState
//   if (state == 'interactive') {
//        document.getElementById('heat').style.visibility="hidden";
//   } else if (state == 'complete') {
//       setTimeout(function(){
//          document.getElementById('interactive');
//          document.getElementById('load').style.visibility="hidden";
//          document.getElementById('heat').style.visibility="visible";
//       },1);
//   }
// }
// }

// function signUpFrom(){
// 	console.log('love');
// 	var elem = document.getElementById('signBox');
// 	document.getElementById('parentContainer').scrolling = 'no';
// 	elem.style.display = 'block';
// }

export default Layout;