
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
				<ul>
					<li className='footerLink'>
						<p id="copyright">
							© {year()} Audio-Boy
						</p>
					</li>
						<li className='footerLink'><a href="#">Privay Policy</a></li>
						<li className='footerLink'><a href="#">Terms of Use</a></li>
						<li className='footerLink'><a href="#">Ad Choices</a></li>
						<li className='footerLink'><a href="#">Cookie Policy</a></li>
						<li className='footerLink'><a href="#">Jobs</a></li>
				</ul>
			</div>
		</div>
	</div>
);

export default Footer;