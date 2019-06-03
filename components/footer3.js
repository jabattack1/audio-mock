import Link from 'next/link';

function year(){
	if (process.browser){
		var theDate=new Date() ;
		var spit = theDate.getFullYear();
	}
	return spit;
}

const Footer3 = () => (
    <div className='footerWrapper3'>
		<div className='footer'>
			<div className='footerMenu'>
				<ul>
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
		</div>
	</div>
);

export default Footer3;