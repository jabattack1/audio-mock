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
           day:''
		};
		this.isNumberKeyMonth = this.isNumberKeyMonth.bind(this);
		this.isNumberKeyYear = this.isNumberKeyYear.bind(this);
		this.isNumberKeyDay = this.isNumberKeyDay.bind(this);
    }


	state={
		month:'',
		yearh:'',
		day:''
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
		console.log(this.state);
		return(
			<div className='signUpBox'>
				<form>
					<div id='signUp'>
					
					<h3 id='signUpHeading'>AUDIO-BOY SIGN UP FOR PROMOS AND EVENTS</h3>				
					
					<label for='first_name' id='firstNameSignUpText' >First Name</label>
					<input type='text' name='first_name' id='firstNameSignup' />
					<label for='last_name' id='lastNameSignUpText' >Last Name</label>
					<input type='text' name='last_name' id='lastNameSignup' />
					<label for='email' id='emailSignUpText' >Email</label>
					<input type='text' name='email_field' id='emailSignUp' />
					<label for='phone' id='phoneSignUpText' >Phone Number</label>
					<input type='text' name='phone_field' id='phoneSignUp' />
					<div className='genderStuff'>
						<label for='gender' id='genderSignUpText' >Gender</label>
						<label id='femaleCheck' className='signupOption'>
						<input type='checkbox' id='femaleCheckActual' className='signupCheckBox' value='female' /><span id='checkboxTextFemale'>FEMALE</span>
						</label>
						<label id='maleCheck' className='signupOption'>
						<input type='checkbox' for='gender' id='maleCheckActual' name='sex' className='signupCheckBox' value='male' onClick={this.checkMale} /><span id='checkboxTextMale'>MALE</span>
						</label>
					<input name='gender' id='gender' hidden />
					</div>
					<div className='birthdayStuff'>
						<label for='dob' id ='birthdaySignUpText' >Birthday</label>s
						<input type='text' name='month' id='monthSignup' pattern='[0-9]*' minlength='2' maxlength='2'  autocomplete='off' onChange={this.isNumberKeyMonth} value={this.state.month} placeholder='MO'/>
						<input type='text' name='day' id='daySignup' pattern='[0-9]*' minlength='2' maxlength='2'  autocomplete='off' onChange={this.isNumberKeyDay} value={this.state.day} placeholder='DAY'/>
						<input type='text' name='year' id='yearSignup' pattern='[0-9]*' minlength='4' maxlength='4'  autocomplete='off' onChange={this.isNumberKeyYear} value={this.state.year} placeholder='YEAR'/>
					</div>
					<label for='country' id='countrySignUpText' >Country of Origin</label>
					<input type='text' name='country_field' id='countrySignUp' />
					<label for='fav_artist' id='artistSignUpText' >Favorite Artist</label>
					<input type='text' name='fav_artist' id='artistSignup' />
					<button id='signupButton'>REGISTER</button>


					</div> 
				</form>
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