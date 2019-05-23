import Link from 'next/link';

const Navbar = () => (
    <div className="nav">
      <ul>
        <li className="home"><a href="#">Artists</a></li>
        <li className="tutorials"><a href="#">News</a></li>
        <li className="about"><a href="#">Label Info</a></li>
        <li className="news"><a href="#">Store</a></li>
        <li className="contact"><a href="#">Contact</a></li>
      </ul>
    </div>
);

export default Navbar;