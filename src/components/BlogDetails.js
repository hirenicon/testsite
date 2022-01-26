import React,{lazy,Suspense} from 'react';
// import { useLocation} from "react-router-dom";
import '../CSS/BlogDetails.css';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const InstagramSection = lazy(() => import('./InstagramSection'));

const BlogDetails = () =>{
	// let getLocation = useLocation();
	// let productName = getLocation.search.substr(1,getLocation.search.length-1).split('=')[1];

	return(
		<>
			<Suspense fallback={<div></div>}>
				<Header activeLink="News"/>
			</Suspense>
			<div className="page-intro-banner">
				<div className="page-banner-bg">
					<div className="page-banner-title">
						<h2>Blog Details Page</h2>
					</div>
					<div className="page-banner-content">
						<h4>Home</h4>
						<span><i className="fas fa-chevron-right"></i></span>
						<h4>Blog</h4>
						<span><i className="fas fa-chevron-right"></i></span>
						<h4>Blog Details</h4>
					</div>
				</div>
			</div>
			<div className="blog-content-section">
				<div className="container">
					<div className="blog-content-heading-image">
						<img src="/img/blog_img.webp" alt=" "/>
					</div>
					<div className="blog-content-heading-section">
						<div className="blog-heading">
							<h2>This is heading for your blog post</h2>
						</div>
						<div className="blog-heading-details">
							<div className="blog-comment">
								<div className="blog-comment-user"><i className="fas fa-user"></i><span>By Admin</span>
								</div>
								<div className="total-comments"><i className="fas fa-comments"></i><span>2 comments</span>
								</div>
							</div>
							<div className="blog-comment-date">
								<span>Nov 3,2021</span>
							</div>
						</div>
					</div>
					<hr/>
					<div className="blog-content-area">
						<h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
						<h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
						<div className="blog-content-area-highlighted-line">
							<h4><i className="fas fa-quote-left"></i></h4>
							<h3>Nunc blandit tincidunt consequat. Duis diam metus, suscipit ininar eget,arcu. Duis a enim vel mauris ultrices.</h3>
						</div>
						<h6>Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since.Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since.Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since.Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since.Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since.</h6>
						<div className="blog-content-area-image">
							<img src="/img/home_page_banner.webp" alt=""/>
						</div>
						<h6>Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since.Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since.Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since.Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since.Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since. Lorem Ipsums is simply dummy text of the print industry. Lorem Ipsum has industry's standard dummy text ever since.</h6>
						<div className="blog-social-link">
							<h5>Share </h5>
							<ul className="blog-social">
								<li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="/"><i className="fab fa-twitter"></i></a></li>
								<li><a href="/"><i className="fab fa-instagram"></i></a></li>
								<li><a href="/"><i className="fab fa-youtube"></i></a></li>
								<li><a href="/"><i className="fas fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="blog-comment-section">
				<div className="container">
					<div className="blog-comment-title">
						<h3>Comments</h3>
					</div>
					<div className="blog-comment-container">
						<div className="blog-comment-area">
							<div className="row">
								<div className="col-lg-2 col-md-3">
									<div className="blog-comment-image">
										<img src="/img/about_us_video.webp" alt=" "/>
									</div>
								</div>
								<div className="col-lg-10 col-md-9">
									<div className="blog-comment-content">
										<h3>White Lewis</h3>
										<h4>Nov 3, 2021</h4>
										<h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
										<h5><i className="fas fa-reply-all"></i> Reply</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="blog-comment-area">
							<div className="row">
								<div className="col-lg-2 col-md-3">
									<div className="blog-comment-image">
										<img src="/img/about_us_video.webp" alt=" "/>
									</div>
								</div>
								<div className="col-lg-10 col-md-9">
									<div className="blog-comment-content">
										<h3>White Lewis</h3>
										<h4>Nov 3, 2021</h4>
										<h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
										<h5><i className="fas fa-reply-all"></i> Reply</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="blog-comment-area">
							<div className="row">
								<div className="col-lg-2 col-md-3">
									<div className="blog-comment-image">
										{/*<img src="/img/about_us_video.jpg" alt=" "/>*/}
										<picture>
											<source srcSet="/img/about_us_video.webp" type="image/webp"/>
											<source srcSet="/img/about_us_video.jpg" type="image/jpeg"/> 
											<img src="/img/about_us_video.jpg" alt=" "/>
										</picture>
									</div>
								</div>
								<div className="col-lg-10 col-md-9">
									<div className="blog-comment-content">
										<h3>White Lewis</h3>
										<h4>Nov 3, 2021</h4>
										<h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
										<h5><i className="fas fa-reply-all"></i> Reply</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="blog-add-comment-section">
				<div className="container">
					<div className="blog-add-comment-title">
						<h2>Leave A Comment</h2>
					</div>
					<div className="blog-add-comment-content">
						<form>
							<div className="form-field">
								<div className="comment-details">
									<input type="text" name="name" placeholder="Name *"/>
									<input type="email" name="email" placeholder="Email *"/>
									<input type="text" name="website" placeholder="Website *" />
								</div>
							</div>
							<div className="form-field">
								<div className="comment-message">
									<textarea name="message" placeholder="Message"></textarea>
								</div>
							</div>
							<div className="form-field">
								<span className="form-check-box">
									<label>
										<input id="save-comment-details" type="checkbox" name="save-details"/>
										<span className="checkmark"></span>
									</label>
								</span>
								<label>Save my name and email in this browser for the next time I comment.</label>
							</div>
							<div className="form-field">
								<button type="submit">Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="home-page-news">
				<div className="home-page-news-title">
					<h2>Recent Post</h2>
				</div>
				<div className="home-page-news-content">
					<div className="container">
						<div className="home-page-news-area">
							<div className="row">
								<div className="col-lg-4 mb-3">
									<div className="news-item">
										<div className="news-item-image">
											<a href="/">
												<img alt="news-img" src="/img/news_image.webp"/>
												<div className="news-item-image-overlay">
														<i className="fas fa-link"></i>
												</div>
											</a>
										</div>
										<div className="news-item-content">
											<div className="news-comment-section">
												<div className="news-content-date">
													<span>24 Nov</span>
												</div>
												<div className="news-comment">
													<div className="comment-user"><i className="fas fa-user"></i><a href="/">ilonamaher</a></div>
													<div className="total-comments"><i className="fas fa-comments"></i><a href="/">19</a></div>
												</div>
											</div>
											<div className="news-content">
												<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
											</div>
											<div className="news-more">
												<a href="/">Learn Now</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 mb-3">
									<div className="news-item">
										<div className="news-item-image">
											<a href="/">
												<img alt="news-img" src="/img/news_image.webp"/>
												<div className="news-item-image-overlay">
														<i className="fas fa-link"></i>
												</div>
											</a>
										</div>
										<div className="news-item-content">
											<div className="news-comment-section">
												<div className="news-content-date">
													<span>24 Nov</span>
												</div>
												<div className="news-comment">
													<div className="comment-user"><i className="fas fa-user"></i><a href="/">ilonamaher</a></div>
													<div className="total-comments"><i className="fas fa-comments"></i><a href="/">19</a></div>
												</div>
											</div>
											<div className="news-content">
												<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
											</div>
											<div className="news-more">
												<a href="/">Learn Now</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 mb-3">
									<div className="news-item">
										<div className="news-item-image">
											<a href="/">
												<img alt="news-img" src="/img/news_image.jpg"/>
												<div className="news-item-image-overlay">
														<i className="fas fa-link"></i>
												</div>
											</a>
										</div>
										<div className="news-item-content">
											<div className="news-comment-section">
												<div className="news-content-date">
													<span>24 Nov</span>
												</div>
												<div className="news-comment">
													<div className="comment-user"><i className="fas fa-user"></i><a href="/">ilonamaher</a></div>
													<div className="total-comments"><i className="fas fa-comments"></i><a href="/">19</a></div>
												</div>
											</div>
											<div className="news-content">
												<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
											</div>
											<div className="news-more">
												<a href="/">Learn Now</a>
											</div>
										</div>
									</div>
								</div>
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

export default BlogDetails;