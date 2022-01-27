import React,{lazy,Suspense} from 'react';
import '../CSS/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const InstagramSection = lazy(() => import('./InstagramSection'));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    ><div className="custom-arrow-slide"><i className="fas fa-angle-right"></i></div></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    ><div className="custom-arrow-slide"><i className="fas fa-angle-left"></i></div></div>
  );
}


const Home = () =>{
	var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay:true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            infinite: true,
		    speed: 500,
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    autoplay:true,
		    autoplaySpeed: 3000,
		    nextArrow: <SampleNextArrow />,
		    prevArrow: <SamplePrevArrow />,
          }
        },
        {
          breakpoint: 768,
          settings: {
            infinite: true,
		    speed: 500,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    autoplay:true,
		    autoplaySpeed: 3000,
		    nextArrow: <SampleNextArrow />,
		    prevArrow: <SamplePrevArrow />,
          }
        }
    ]
  };
  
	return(
		<React.Fragment>
			<Suspense fallback={<div></div>}>
				<Header activeLink="Home"/>
			</Suspense>
			<div className="home-banner">
				<div className="home-banner-content">
					<h2>IM Beast Beauty Brains</h2>
					<h6>Lorem ipsum dolor sit amet</h6>
					<div className="home-banner-button">
						<a href="/">Shop Now</a>
					</div>
				</div>
			</div>
			<div className="home-about-us">
				<div className="container">
					<div className="about-us-title">
						<h2>About Us</h2>
					</div>
					<div className="about-us-content">
						<div className="row">
							<div className="col-lg-6 col-md-6 ">
								<div className="about-us-video-content">
									<div className="about-us-video-content-bg">
										<div className="about-us-video">
											<div className="play-btn">
												<i className="fas fa-play-circle"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="about-us-text">
									<div className="about-us-text-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
										<a href="/">
											About Us
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="home-categories">
				<div className="container-fluid">
					<div className="home-categories-title">
						<h2>Categories</h2>
					</div>
					<div className="home-categories-content">
						<div className="row">
							<div className="col-lg-4 col-md-4 p-md-0 mb-md-0 mb-3">
								<div className="category-product-card">
									<div className="category-product-card-bg shirts">
										<div className="category-product-text">
											<h2>Shirts</h2>
										</div>
										<div className="category-product-card-overlay">
											<h2>Shirts</h2>
											<a href="/">Shop Now</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 p-md-0 mb-md-0 mb-3">
								<div className="category-product-card">
									<div className="category-product-card-bg sweat-shirts">
										<div className="category-product-text">
											<h2>Sweatshirts</h2>
										</div>
										<div className="category-product-card-overlay">
											<h2>Sweatshirts</h2>
											<a href="/">Shop Now</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 p-md-0 mb-md-0 mb-3">
								<div className="category-product-card">
									<div className="category-product-card-bg bottoms">
										<div className="category-product-text">
											<h2>Bottoms</h2>
										</div>
										<div className="category-product-card-overlay">
											<h2>Bottoms</h2>
											<a href="/">Shop Now</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="home-product">
				<div className="container-fluid">
					<div className="home-product-title">
						<h2>Product</h2>
					</div>
					<div className="home-product-content">
      				<Slider {...settings}>
					      	<div className="home-product-card">
					      		<div className="home-product-img">
					      			<img alt="product-img" src="/img/product_sweatshirt_2.webp"/>
					      			<div className="product-img-content">
					      				<a href="/"><span><i className="fas fa-shopping-cart"></i></span> Add to cart</a>
					      			</div>
					      		</div>
					      		<div className="home-product-img-content">
					      			<div className="home-product-name">
					      				Sweatshirts
					      			</div>
					      			<div className="home-product-price">$45</div>
					      		</div>
					      	</div>
					      	<div className="home-product-card">
					      		<div className="home-product-img">
					      			<img alt="product-img" src="/img/product_bottoms.webp"/>
					      			<div className="product-img-content">
					      				<a href="/"><span><i className="fas fa-shopping-cart"></i></span> Add to cart</a>
					      			</div>
					      		</div>
					      		<div className="home-product-img-content">
					      			<div className="home-product-name">
					      				Shirts
					      			</div>
					      			<div className="home-product-price">$45</div>
					      		</div>
					      	</div>
					      	<div className="home-product-card">
					      		<div className="home-product-img">
					      			<img alt="product-img" src="/img/product_sweatshirts.webp"/>
					      			<div className="product-img-content">
					      				<a href="/"><span><i className="fas fa-shopping-cart"></i></span> Add to cart</a>
					      			</div>
					      		</div>
					      		<div className="home-product-img-content">
					      			<div className="home-product-name">
					      				Bottoms
					      			</div>
					      			<div className="home-product-price">$45</div>
					      		</div>
					      	</div>
					      	<div className="home-product-card">
					      		<div className="home-product-img">
					      			<img alt="product-img" src="/img/product_sweatshirts.webp"/>
					      			<div className="product-img-content">
					      				<a href="/"><span><i className="fas fa-shopping-cart"></i></span> Add to cart</a>
					      			</div>
					      		</div>
					      		<div className="home-product-img-content">
					      			<div className="home-product-name">
					      				Bottoms2
					      			</div>
					      			<div className="home-product-price">$45</div>
					      		</div>
					      	</div>
					      	<div className="home-product-card">
					      		<div className="home-product-img">
					      			<img alt="product-img" src="/img/product_sweatshirt_2.webp"/>
					      			<div className="product-img-content">
					      				<a href="/"><span><i className="fas fa-shopping-cart"></i></span> Add to cart</a>
					      			</div>
					      		</div>
					      		<div className="home-product-img-content">
					      			<div className="home-product-name">
					      				Sweatshirts2
					      			</div>
					      			<div className="home-product-price">$45</div>
					      		</div>
					      	</div>
					    </Slider>
					</div>
				</div>
			</div>
			<div className="home-page-news">
				<div className="home-page-news-title">
					<h2>Latest News</h2>
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
							</div>
						</div>
					</div>
				</div>
			</div>
			<Suspense fallback={<div></div>}>
				<InstagramSection />
			</Suspense>
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
			<div className="home-page-blank-container"></div>
			<Suspense fallback={<div></div>}>
				<Footer />
			</Suspense>
		</React.Fragment>
	);
}

export default Home;
