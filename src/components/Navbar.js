import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

const Navbar = (props) =>{
	const [openToggle,setopenToggle] = useState(false);

	setTimeout(()=>{
		$('.nav-link').each(function(e){
			if($('.nav-link')[e].innerHTML === props.activeLink){
				$('.nav-link')[e].classList.add('active');
			}
		})
	},500)

	return(
		<>
			<div className="nav-bar-list">
				<nav className="nav-bar">
					<Link className="nav-link" to='/'>Home</Link>
					<Link className="nav-link" to='/about'>About</Link>
					<Link className="nav-link" to='/shop'>Shop</Link>
					<Link className="nav-link" to='/news'>News</Link>
					<Link className="nav-link" to='/contact'>Contact</Link>
				</nav>
			</div>
			<div className="mobile-view-nav-bar">
				<div className="menu-button" onClick={()=>{setopenToggle(!openToggle);}}>
					<i className={openToggle ? "fas fa-times" : "fas fa-bars"} style={{color:openToggle ? 'maroon' : 'black'}}></i>
				</div>
				<nav className={openToggle ? 'nav-bar active' : 'nav-bar'} style={{visibility:openToggle ? 'visible' : 'hidden'}}>
					<Link className="nav-link" to='/'>Home</Link>
					<Link className="nav-link" to='/about'>About</Link>
					<Link className="nav-link" to='/shop'>Shop</Link>
					<Link className="nav-link" to='/news'>News</Link>
					<Link className="nav-link" to='/contact'>Contact</Link>
				</nav>
			</div>
		</>
	);
}

export default Navbar;