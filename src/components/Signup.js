import React,{lazy,Suspense} from 'react';
import '../CSS/LoginSignup.css';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));

const Signup = ()=>{
	return(
		<>
			<Suspense fallback={<div></div>}>
				<Header />
			</Suspense>
			<div className="page-intro-banner">
				<div className="page-banner-bg">
					<div className="page-banner-title">
						<h2>Register Page</h2>
					</div>
					<div className="page-banner-content">
						<h4>Home</h4>
						<span><i className="fas fa-chevron-right"></i></span>
						<h4>Register</h4>
					</div>
				</div>
			</div>
			<div className="user-login-signup-form-section">
				<div className="container">
					<div className="user-form">
						<div className="user-login-signup-form-title">
							<h2>Register</h2>
						</div>
						<div className="user-login-signup-form-content">
							<form>
								<div className="form-field form-fields">
									<label htmlFor="user-name">Username<span> *</span></label>
									<input id="user-name" type="text" name="username" />
								</div>
								<div className="form-field form-fields">
									<label htmlFor="user-name">Email<span> *</span></label>
									<input id="user-name" type="text" name="username" />
								</div>
								<div className="form-field form-fields">
									<label htmlFor="user-password">Password<span> *</span></label>
									<input id="user-password" type="Password" name="password" />
								</div>
								<div className="form-field-button form-fields">
									<button type="submit">Register</button>
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

export default Signup