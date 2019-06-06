import React from 'react';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/mobile.css';
import '../css/scroller.css';
import '../css/sign-up.css';
import '../css/shoppingCart.css';

class SignUp extends React.Component{
	constructor(props) {
		super(props);

        this.state = {
           month:'',
           year:'',
           day:'',
           phone:''
		};
		this.isNumberKeyMonth = this.isNumberKeyMonth.bind(this);
		this.isNumberKeyYear = this.isNumberKeyYear.bind(this);
		this.isNumberKeyDay = this.isNumberKeyDay.bind(this);
		this.isNumberKeyPhone = this.isNumberKeyPhone.bind(this);
    }


	state={
		month:'',
		yearh:'',
		day:'',
		phone:''
	}
	// (document).ready(function() {




// $("#male").click(function (evt) { 
// if($('#male').prop('checked') == true){
//   $('#gender').val('male');
//   $('#maleCheck').removeClass('signupOption').addClass('highlight');
//   $('#female').attr('checked', false);
//   $('#femaleCheck').removeClass('highlight').addClass('signupOption');
//   evt.stopPropagation();
// }
// else{
//   $('#maleCheck').removeClass('highlight').addClass('signupOption');
//   evt.stopPropagation();
//   $('#gender').val('');
// }
// });


	render(){
if (typeof window !== 'undefined') {
			// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
		console.log(this.state);
		return(
			<div>
				<div id="myModal" class="modal">
				  	<div class="modal-content">
				    <span class="close">&times;</span>
						<div className='signUpBox' id='signBox'>
							<form>
							<div id='signUp'>
								<h3 id='signUpHeading'>GET BLASTED BY EMAILS FROM</h3>
								<img src='https://i.imgur.com/QpsNlJb.png' id='signUpImage' />
								<p id='signUpSay'>Sign up and get exclusive promotional discounts on merchandise and information on upcoming events. We promise not to blast you with a ton of emails.</p>
								<label htmlFor='first_name' id='firstNameSignUpText' >First Name</label>
								<input type='text' name='first_name' id='firstNameSignup' />
								<label htmlFor='last_name' id='lastNameSignUpText' >Last Name</label>
								<input type='text' name='last_name' id='lastNameSignup' />
								<label htmlFor='email' id='emailSignUpText' >Email</label>
								<input type='text' name='email_field' id='emailSignUp' />
								<label htmlFor='phone' id='phoneSignUpText' >Phone Number</label>
								<input type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' name='phone_field' id='phoneSignUp' onChange={this.isNumberKeyPhone} value={this.state.phone}/>
								<div className='genderStuff'>
									<label htmlFor='gender' id='genderSignUpText' >Gender</label>
									<label id='femaleCheck' className='signupOption'>
									<input type='checkbox' id='femaleCheckActual' className='signupCheckBox' value='female' /><span id='checkboxTextFemale'>FEMALE</span>
									</label>
									<label id='maleCheck' className='signupOption'>
									<input type='checkbox' htmlFor='gender' id='maleCheckActual' name='sex' className='signupCheckBox' value='male' onClick={this.checkMale} /><span id='checkboxTextMale'>MALE</span>
									</label>
									<input name='gender' id='gender' hidden />
								</div>
								<div className='birthdayStuff'>
									<label htmlFor='dob' id ='birthdaySignUpText' >Birthday</label>
									<input type='text' name='month' id='monthSignup' pattern='[0-9]*' minLength='2' maxLength='2'  autoComplete='off' onChange={this.isNumberKeyMonth} value={this.state.month} placeholder='MO'/>
									<input type='text' name='day' id='daySignup' pattern='[0-9]*' minLength='2' maxLength='2'  autoComplete='off' onChange={this.isNumberKeyDay} value={this.state.day} placeholder='DAY'/>
									<input type='text' name='year' id='yearSignup' pattern='[0-9]*' minLength='4' maxLength='4'  autoComplete='off' onChange={this.isNumberKeyYear} value={this.state.year} placeholder='YEAR'/>
								</div>
								<label htmlFor='country' id='countrySignUpText' >Country of Origin</label>
								<input type='text' name='country_field' id='countrySignUp' />
								<label htmlFor='fav_artist' id='artistSignUpText' >Favorite Artist</label>
								<input type='text' name='fav_artist' id='artistSignup' />
								<button id='signupButton'>REGISTER</button>
							</div> 
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}

	isNumberKeyMonth(e){
	    const re = /^[0-9\b]+$/;
	    if (e.target.value == '' || re.test(e.target.value)){
	        this.setState({month: e.target.value});
	    }
	    else{
			return false;
	    }
	}

	isNumberKeyYear(e){
	    const re = /^[0-9\b]+$/;
	    if (e.target.value == '' || re.test(e.target.value)){
	        this.setState({year: e.target.value});
	    }
	    else{
			return false;
	    }
	}

	isNumberKeyDay(e){
	    const re = /^[0-9\b]+$/;
	    if (e.target.value == '' || re.test(e.target.value)){
	        this.setState({day: e.target.value});
	    }
	    else{
			return false;
	    }
	}

	isNumberKeyPhone(e){
	    const re = /^[0-9\b]+$/;
	    if (e.target.value == '' || re.test(e.target.value)){
	        this.setState({phone: e.target.value});
	    }
	    else{
			return false;
	    }
	}


	checkMale(){
		var checkbox = document.getElementById("maleCheck");
		checkbox.addEventListener('change', function(e) {
  			if(checkbox.children[0].checked){
  				console.log('the lion');
  			}
		});
		// console.log('stimpy');
		// var isChecked= document.getElementById('femaleCheck').checked;
		// console.log(isChecked);
		// if(document.getElementById('maleCheck').check == true){
		// 	console.log('time');
  // $('#gender').val('female');
  // $('#femaleCheck').removeClass('signupOption').addClass('highlight');
  // $('#male').attr('checked', false);
  // $('#maleCheck').removeClass('highlight').addClass('signupOption');
  // evt.stopPropagation();
		// }
		// else{
  // $('#femaleCheck').removeClass('highlight').addClass('signupOption');
  // evt.stopPropagation();
  // $('#gender').val('');
		// }

		}

	validEmail(v){
	    var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
	    return (v.match(r) == null) ? false : true;
	}

}

					
	    


export default SignUp;