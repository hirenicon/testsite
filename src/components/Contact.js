import React,{lazy,Suspense} from 'react';
import '../CSS/Contact.css';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const InstagramSection = lazy(() => import('./InstagramSection'));

const Contact = () =>{

	
	return(
		<>
			<Suspense fallback={<div></div>}>
				<Header activeLink="Contact"/>
			</Suspense>
			<div className="contact-us-intro-banner">
				<div className="contact-page-banner-bg">
					<div className="contact-page-banner-title">
						<h2>Contact Us</h2>
					</div>
					<div className="contact-page-banner-content">
						<h4>Home</h4>
						<span><i className="fas fa-chevron-right"></i></span>
						<h4 className="active-content">Contact</h4>
					</div>
				</div>
			</div>	
			<div className="contact-us-form">
				<div className="contact-us-form-title">
					<h2>Leave a Message</h2>
				</div>
				<div className="contact-us-form-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="contact-person-detail">
									<div className="contact-person-detail-icon">
										<i className="fas fa-map-marker-alt"></i>
									</div>
									<div className="contact-person-detail-content">
										<h3>Address</h3>
										<h6>San Diego, California</h6>
									</div>
								</div>
								<div className="contact-person-detail highlight">
									<div className="contact-person-detail-icon">
										<i className="fas fa-phone highlight"></i>
									</div>
									<div className="contact-person-detail-content">
										<h3 className="highlight">Phone</h3>
										<h6>(888) 589 658 23</h6>
									</div>
								</div>
								<div className="contact-person-detail highlight">
									<div className="contact-person-detail-icon">
										<i className="fas fa-envelope highlight"></i>
									</div>
									<div className="contact-person-detail-content">
										<h3 className="highlight">Email</h3>
										<h6>info@ilonamaher.com</h6>
									</div>
								</div>
								<div className="contact-person-detail highlight">
									<div className="contact-person-detail-icon">
										<i className="fas fa-share-alt highlight"></i>
									</div>
									<div className="contact-person-detail-content">
										<h3 className="highlight">Follow US</h3>
										<h6>
											<a href="/"><i className="fab fa-facebook-square"></i></a>
											<a href="/"><i className="fab fa-twitter-square"></i></a>
											<a href="/"><i className="fab fa-instagram"></i></a>
											<a href="/"><i className="fab fa-youtube-square"></i></a>
											<a href="/"><i className="fas fa-envelope"></i></a>
										</h6>
									</div>
								</div>
							</div>
							<div className="col-lg-8">
								<form className="contact-form" action="/" method="get">
									<div className="contact-form-field">
										<input type="text" name="name" placeholder="Name" />
									</div>
									<div className="contact-form-field">
										<input type="text" name="number" placeholder="Phone" />
									</div>
									<div className="contact-form-field">
										<input type="email" name="email" placeholder="Email" />
									</div>
									<div className="contact-form-field">
										<textarea name="message" placeholder="Your Message"></textarea>
									</div>
									<div className="contact-form-field">
										<button type="submit">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Suspense fallback={<div></div>}>
				<InstagramSection />
			</Suspense>
			<Suspense fallback={<div></div>}>
				<Footer />
			</Suspense>
		</>
	);
}

export default Contact;