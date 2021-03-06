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
		<div className='topBanner'>Subscribe <span className='bold'>NOW</span> for our updates & promotions! <span className='bold'><span className='linkHere' id="myBtn" onClick={testClick}>OVER HERE</span></span>
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

export default Layout2;