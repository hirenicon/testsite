import React,{lazy,Suspense} from 'react';
import '../CSS/Header.css';
import {Link} from 'react-router-dom';

const Navbar = lazy(()=>import('./Navbar'));

const Header = (props) =>{
	return(
		<>
			<div className="header-wrapper">
				<div className="site-logo">
					<img alt="site-logo" src="/img/logo.webp" />
				</div>
				<Suspense fallback={<div></div>}>
					<Navbar activeLink={props.activeLink}/>
				</Suspense>
				<div className="site-external-links">
					<ul className="site-links">
						<li><a href="/"><span><i className="fab fa-facebook-square"></i></span></a></li>
						<li><a href="/"><span><i className="fab fa-twitter-square"></i></span></a></li>
						<li><a href="/"><span><i className="fab fa-instagram"></i></span></a></li>
						<li><a href="/"><span><i className="fab fa-youtube-square"></i></span></a></li>
						<li><a href="/"><span><i className="fas fa-envelope"></i></span></a></li>
					</ul>
					<ul className="site-action-link">
						<li><a href="/"><span><i className="fas fa-user"></i></span></a></li>
						<li><a href="/"><span><i className="fas fa-search"></i></span></a></li>
						<li><Link to="/cart"><span><i className="fas fa-shopping-cart">
							<div className="cart-item">0</div>
						</i></span></Link></li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Header;