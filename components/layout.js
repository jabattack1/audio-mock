import Head from 'next/head';
import Navbar from './navbar.js';
import Footer from './footer.js';
import Link from 'next/link';

import SignUp from '../components/sign-up.js';
import Layout5 from '../components/layout5.js';

const Layout = (props) => (
	<div>
	<Head>
		<title>Mock Records</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/Xc2Et4w.png' />
		<script src="dist/inputmask.js"></script>
	</Head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<div id="load"></div>
		<div id='heat'>
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><span className='linkHere' id="myBtn" onClick={testClick}>OVER HERE</span></span> 
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

function testClick(){
	if(document.getElementById("myModal")){
		// Get the modal
		var modal = document.getElementById("myModal");

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn");
	
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal 
		modal.style.display = "block";

		// When the user clicks on <span> (x), close the modal
		if(span){
			span.onclick = function() {
			modal.style.display = "none";
			}
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	}
}

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