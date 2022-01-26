import React,{lazy,Suspense} from 'react';
import '../CSS/LoginSignup.css';
import {Link} from 'react-router-dom';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));

const Login = ()=>{
	return(
		<>
			<Suspense fallback={<div></div>}>
				<Header />
			</Suspense>
			<div className="page-intro-banner">
				<div className="page-banner-bg">
					<div className="page-banner-title">
						<h2>Login Page</h2>
					</div>
					<div className="page-banner-content">
						<h4>Home</h4>
						<span><i className="fas fa-chevron-right"></i></span>
						<h4>Login</h4>
					</div>
				</div>
			</div>
			<div className="user-login-signup-form-section">
				<div className="container">
					<div className="user-form">
						<div className="user-login-signup-form-title">
							<h2>Login</h2>
						</div>
						<div className="user-login-signup-form-content">
							<form>
								<div className="form-field form-fields">
									<label htmlFor="user-name">Username or Email<span> *</span></label>
									<input id="user-name" type="text" name="username" />
								</div>
								<div className="form-field form-fields">
									<label htmlFor="user-password">Password<span> *</span></label>
									<input id="user-password" type="Password" name="password" />
								</div>
								<div className="form-extra-field form-fields">
									<div className="remeber-field">
										<label>
											<input type="checkbox" name="remembarpass" />
											<span className="checkmark"></span>
										</label>
										<span>Rember me</span>
									</div>
									<div className="forgot-field">
										<a href="/">Forgot Password?</a>
									</div>
								</div>
								<div className="form-field-button form-fields">
									<button type="submit">Login</button>
								</div>
								<div className="form-info-field form-fields">
									New Here?
									<Link to="/signup">Create An New Account.</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Suspense fallback={<div></div>}>
				<Footer />
			</Suspense>
		</>
	);
}

export default Login