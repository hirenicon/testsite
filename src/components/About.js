import React,{lazy,Suspense} from 'react'
import '../CSS/About.css';
import $ from 'jquery';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const InstagramSection = lazy(() => import('./InstagramSection'));


const About = () =>{
	setTimeout(()=>{
		$('.tab-menu ul li').on('click',function(){
			$('.tab-menu ul li').each(function(e){
				$('.tab-menu ul li')[e].classList.remove('active');
				$('.content-tabs')[e].classList.remove('active');
				$('.img-tab')[e].classList.remove('active');
			})
			$(this)[0].classList.add('active');
			var name = $(this)[0].innerHTML
			$('.img-tab-'+name)[0].classList.add('active');
			$('.tab-'+name+'-content')[0].classList.add('active');
		})
	},500)

	return(
		<>
			<Suspense fallback={<div></div>}>
				<Header activeLink="About"/>
			</Suspense>
			<div className="page-intro-banner">
				<div className="page-banner-bg">
					<div className="page-banner-title">
						<h2>About Us</h2>
					</div>
					<div className="page-banner-content">
						<h4>Home</h4>
						<span><i className="fas fa-chevron-right"></i></span>
						<h4>About Us</h4>
					</div>
				</div>
			</div>
			<div className="about-store-info">
				<div className="container">
					<div className="about-store-content">
						<div className="row">
							<div className="col-lg-6 col-md-6 p-0">
								<div className="about-store-text">
									<h2>
										WELCOME TO <span>ilona maher'S</span> STORE!
									</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum, leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum, leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</p>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 p-0">
								<div className="about-store-image">
									<div className="about-store-image-level-1">
										{/*<img alt="about-img" src="/img/about_us_video.jpg"/>*/}
										<picture>
											<source srcSet="/img/about_us_video.webp" type="image/webp"/>
											<source srcSet="/img/about_us_video.jpg" type="image/jpeg"/> 
											<img src="/img/about_us_video.jpg" alt="about-img"/>
										</picture>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about-section-moto">
				<div className="container">
					<div className="row flex-column-reverse flex-md-row">
						<div className="col-lg-6 col-md-6">
							<div className="img-tab img-tab-Mission active">
								{/*<img alt="tab-img" src="/img/news_image.jpg"/>*/}
								<picture>
									<source srcSet="/img/news_image.webp" type="image/webp"/>
									<source srcSet="/img/news_image.jpg" type="image/jpeg"/> 
									<img src="/img/news_image.jpg" alt="tab-img"/>
								</picture>
							</div>
							<div className="img-tab img-tab-Vision">
								{/*<img alt="tab-img" src="/img/product_sweatshirts.jpg" />*/}
								<picture>
									<source srcSet="/img/product_sweatshirts.webp" type="image/webp"/>
									<source srcSet="/img/product_sweatshirts.jpg" type="image/jpeg"/> 
									<img src="/img/product_sweatshirts.jpg" alt="tab-img"/>
								</picture>
							</div>
							<div className="img-tab img-tab-Goal">
								{/*<img alt="tab-img" src="/img/product_shirts.jpg" />*/}
								<picture>
									<source srcSet="/img/product_shirts.webp" type="image/webp"/>
									<source srcSet="/img/product_shirts.jpg" type="image/jpeg"/> 
									<img src="/img/product_shirts.jpg" alt="tab-img"/>
								</picture>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="tab-menu">
								<ul>
									<li className="active">Mission</li>
									<li>Vision</li>
									<li>Goal</li>
								</ul>
							</div>
							<div className="tab-content">
								<div className="content-tabs tab-Mission-content active">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum, leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum, leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</p>
								</div>
								<div className="content-tabs tab-Vision-content">
									<p>Lorem ipsum dolor sit amet, Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum, leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</p>
									<p>Lorem ipsum dolor sit amet, Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum, leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</p>
								</div>
								<div className="content-tabs tab-Goal-content">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum, leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum, leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about-partners">
				<div className="partners-title">
					<h2>Partners</h2>
				</div>
				<div className="partners-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-2 col-md-2 col-sm-6 col-6">
								<div className="partner-img">
									{/*<img alt="partner-img" src="/img/partner_1.png" />*/}
									<picture>
										<source srcSet="/img/partner_1.webp" type="image/webp"/>
										<source srcSet="/img/partner_1.png" type="image/png"/> 
										<img src="/img/partner_1.png" alt="partner-img"/>
									</picture>
								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-6 col-6">
								<div className="partner-img">
									{/*<img alt="partner-img" src="/img/partner_2.png" />*/}
									<picture>
										<source srcSet="/img/partner_2.webp" type="image/webp"/>
										<source srcSet="/img/partner_2.png" type="image/png"/> 
										<img src="/img/partner_2.png" alt="partner-img"/>
									</picture>
								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-6 col-6">
								<div className="partner-img">
									{/*<img alt="partner-img" src="/img/partner_3.png" />*/}
									<picture>
										<source srcSet="/img/partner_3.webp" type="image/webp"/>
										<source srcSet="/img/partner_3.png" type="image/png"/> 
										<img src="/img/partner_3.png" alt="partner-img"/>
									</picture>
								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-6 col-6">
								<div className="partner-img">
									{/*<img alt="partner-img" src="/img/partner_4.png" />*/}
									<picture>
										<source srcSet="/img/partner_4.webp" type="image/webp"/>
										<source srcSet="/img/partner_4.png" type="image/png"/> 
										<img src="/img/partner_4.png" alt="partner-img"/>
									</picture>
								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-6 col-6">
								<div className="partner-img">
									{/*<img alt="partner-img" src="/img/partner_5.png" />*/}
									<picture>
										<source srcSet="/img/partner_5.webp" type="image/webp"/>
										<source srcSet="/img/partner_5.png" type="image/png"/> 
										<img src="/img/partner_5.png" alt="partner-img"/>
									</picture>
								</div>
							</div>
							<div className="col-lg-2 col-md-2 col-sm-6 col-6">
								<div className="partner-img">
									{/*<img alt="partner-img" src="/img/partner_6.png" />*/}
									<picture>
										<source srcSet="/img/partner_6.webp" type="image/webp"/>
										<source srcSet="/img/partner_6.png" type="image/png"/> 
										<img src="/img/partner_6.png" alt="partner-img"/>
									</picture>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div>
			<div className="home-page-news-letter">
				<div className="container">
					<div className="home-page-news-letter-content">
						<div className="home-page-news-letter-title">
							<h2>Subscribe to Our NewsLetter</h2>
						</div>
						<div className="home-page-news-letter-text">
							<div className="news-letter-form">
								<input className="news-letter-input" type="text" name="news-letter" placeholder="Enter your email address"/>
								<a href="/">Subscribe</a>
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

export default About;