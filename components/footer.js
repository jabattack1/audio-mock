
import Link from 'next/link';

function year(){
	if (process.browser){
		var theDate=new Date() ;
		var spit = theDate.getFullYear();
	}
	return spit;
}

const Footer = () => (
    <div className='footerWrapper'>
		<div className='footer'>
			<div className='footerMenu'>
				<ul className='footerContactOutside'>
					<li className='footerLink'>
						<p id="copyright">
							© {year()} Audio-Boy
						</p>
					</li>
					<li className='footerLink'><a href='/privacy-policy'>Privay Policy</a></li>
					<li className='footerLink'><a href='/terms-of-use'>Terms of Use</a></li>
					<li className='footerLink'><a href='/ad-choices'>Ad Choices</a></li>
					<li className='footerLink'><a href='/cookie-policy'>Cookie Policy</a></li>
					<li className='footerLink'><a href='/jobs'>Jobs</a></li>
				</ul>
			</div>
			<div className='footerContacts'>
				<ul>
					<li className='footerLink'><a className='email' href="info@audio-boy.com">info@audio-boy.com</a></li>
					<li className='footerLink'><a className='email' href="pr@audio-boy.com">pr@audio-boy.com</a></li>
					<li className='footerLink'><a className='email' href="hr@audio-boy.com">legal@audio-boy.com</a></li>
				</ul>
			</div>
		</div>
	</div>
);

export default Footer;