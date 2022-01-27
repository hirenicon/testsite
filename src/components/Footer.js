import React from 'react';
import {Link} from 'react-router-dom';

import '../CSS/Footer.css';

const Footer = () =>{

	return(
		<>
			<div className="home-page-footer-area">
				<div className="container-fluid">
					<div className="footer-content">
						<div className="footer-site-logo">
							<img alt="footer-logo" src="/img/site_footer_logo.webp" />
						</div>
						<div className="footer-site-links">
							<nav>
								<Link className="footer-link" to='/'>Home</Link>
								<Link className="footer-link" to='/about'>About</Link>
								<Link className="footer-link" to='/shop'>Shop</Link>
								<Link className="footer-link" to='/news'>News</Link>
								<Link className="footer-link" to='/contact'>Contact</Link>
							</nav>
						</div>
						<div className="footer-external-links">
							<ul className="footer-site-links">
								<li><a href="/"><span><i className="fab fa-facebook-square"></i></span></a></li>
								<li><a href="/"><span><i className="fab fa-twitter-square"></i></span></a></li>
								<li><a href="/"><span><i className="fab fa-instagram"></i></span></a></li>
								<li><a href="/"><span><i className="fab fa-youtube-square"></i></span></a></li>
								<li><a href="/"><span><i className="fas fa-envelope"></i></span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="home-page-footer-content">
				<p>@2021 - All Right Reserved. Powered by ilonamaher</p>
			</div>
		</>
	);
}

export default Footer;