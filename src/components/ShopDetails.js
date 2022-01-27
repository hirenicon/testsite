import React,{useState,lazy,Suspense} from 'react'
import { useLocation} from "react-router-dom";
import '../CSS/ShopDetails.css';
import $ from 'jquery';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const InstagramSection = lazy(() => import('./InstagramSection'));

const ShopDetails = () =>{
	let getLocation = useLocation();
	let productName = getLocation.search.substr(1,getLocation.search.length-1).split('=')[1];
	const [Quantity,setQuantity] = useState(1);

	setTimeout(()=>{
		$('.product-sub-image').on('click',function(){
			$('.product-sub-image').each(function(e){
				$('.product-sub-image')[e].classList.remove('active');
			})
			$('.product-main-image img')[0].src = $(this).children()[1].src
			$(this)[0].classList.add('active');
		})
		$('.product-review .slider-rating').each(function (event) {
			let rating = $(this).attr('rating');
			let i;
			for(i = 0; (i < rating); i++)
			{
				$(this).find('span.star').eq(i).addClass('filled');
			}
			if(rating % 1>0)
				$(this).find('span.star').eq(i-1).addClass('half-filled');
		});
		$('.review-star .slider-rating').each(function (event){
			let rating = $(this).attr('rating');
			let i;
			for(i = 0; (i < rating); i++)
			{
				$(this).find('span.star').eq(i).addClass('filled');
			}
			if(rating % 1>0)
				$(this).find('span.star').eq(i-1).addClass('half-filled');
		})
		$('.product-description-action span').on('click',function(){
			$('.product-description-action span').each(function(e){
				$('.product-description-action span')[e].classList.remove('active');
			})
			$(this)[0].classList.add('active');
			if($(this)[0].innerHTML === 'Description'){
				$('.product-additional-information').show();
				$('.product-reviews-form').hide();
			}else{
				$('.product-additional-information').hide();
				$('.product-reviews-form').show();
			}
		})
	},500)

	return(
		<>
			<Suspense fallback={<div></div>}>
				<Header activeLink="Shop"/>
			</Suspense>
			<div className="page-intro-banner">
				<div className="page-banner-bg">
					<div className="page-banner-title">
						<h2>Product Details</h2>
					</div>
					<div className="page-banner-content">
						<h4>Home</h4>
						<span><i className="fas fa-chevron-right"></i></span>
						<h4>Product</h4>
						<span><i className="fas fa-chevron-right"></i></span>
						<h4>{productName}</h4>
					</div>
				</div>
			</div>
			<div className="product-details-section">
				<div className="product-main-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="image-section">
									<div className="row">
										<div className="col-lg-3 col-md-3">
											<div className="image-selection-area">
												<div className="product-sub-image active">
													<div className="overlay-sub-img-bg"></div>
													<img src="/img/product_img_4.webp" alt=" "/>
												</div>
												<div className="product-sub-image">
													<div className="overlay-sub-img-bg"></div>
													<img src="/img/product_bottoms.webp" alt=" "/>
												</div>
												<div className="product-sub-image">
													<div className="overlay-sub-img-bg"></div>
													<img src="/img/product_img_2.webp" alt=" "/>
												</div>
											</div>
										</div>
										<div className="col-lg-9 col-md-9">
											<div className="full-size-image-area">
												<div className="product-main-image">
													<img src="/img/product_img_4.webp" alt=" "/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="porduct-content">
									<div className="product-name">
										<h5>Crew Sweatshirt</h5>
									</div>
									<div className="product-price">
										<h4>$45.00</h4>
									</div>
									<div className="product-review">
										<span className="slider-rating" rating="3.5">
											<span className="star"></span>
											<span className="star"></span>
											<span className="star"></span>
											<span className="star"></span>
											<span className="star"></span>
											<span>(3 Reviews)</span>
										</span>
									</div>
									<div className="product-availablity">
										<span>Availability: </span>
										<span>In Stock</span>
									</div>
									<div className="product-descritions">
										<h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni nostrud exercitation ullamco laboris</h6>
									</div>
									<div className="product-sub-type">
										<div className="product-type">
											<h5>Porduct Size:</h5>
											<select>
												<option value="Size">Size</option>
												<option value="S">S</option>
												<option value="M">M</option>
												<option value="L">L</option>
												<option value="XL">XL</option>
											</select>
										</div>
										<div className="product-type">
											<h5>Color</h5>
											<select>
												<option value="Size">Color</option>
												<option value="S">Black</option>
												<option value="M">Blue</option>
												<option value="L">Red</option>
												<option value="XL">Green</option>
											</select>
										</div>
										<div className="product-type">
											<h5>Quantity</h5>
											<span>
												<h6 onClick={()=>{if(Quantity > 1){setQuantity(Quantity-1);}}}><i className="fas fa-minus"></i></h6>
												<h6>{Quantity}</h6>
												<h6 onClick={()=>{setQuantity(Quantity+1);}}><i className="fas fa-plus"></i></h6>
											</span>
										</div>
									</div>
									<div className="product-action-buttons">
										<a href="/" className="addtoCart">Add to Cart</a>
										<a href="/" className="buyNow">Buy Now</a>
									</div>
									<div className="product-social-links">
										<h5>Share:</h5>
										<ul className="product-links">
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
					</div>
				</div>
				<div className="product-sub-content"></div>
			</div>
			<div className="product-description-section">
				<div className="container">
					<div className="product-descriptions">
						<div className="product-description-title">
							<div className="product-description-action">
								<span className="active">Description</span>
								<span>Reviews</span>
							</div>
						</div>
						<div className="product-description-content">
							<div className="product-additional-information">
								<h4>Additional Information :</h4>
								<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
								<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
							</div>
							<div className="product-reviews-form">
								<div className="row">
									<div className="col-md-7">
										<div className="review-container">
											<div className="review-message">
												<h5 className="review-user-name">Admin</h5>
												<h6 className="review-date">Dec 17,2021</h6>
												<div className="review-star">
													<span className="slider-rating" rating="3">
														<span className="star"></span>
														<span className="star"></span>
														<span className="star"></span>
														<span className="star"></span>
														<span className="star"></span>
													</span>
												</div>
												<div className="review-user-message">Best Tshirt and Bottoms</div>
											</div>
										</div>
									</div>
									<div className="col-md-5">
										<div className="review-form-area">
											<form action="/" method="get">
												<h4>Add a Review</h4>
												<div className="review-form-field">
													<label htmlFor="username">Name <span className="required">*</span></label>
													<input id="username" type="text" name="username" required/>
												</div>
												<div className="review-form-field">
													<label htmlFor="email">Email <span className="required">*</span></label>
													<input id="email" type="text" name="email" required/>
												</div>
												<div className="review-form-field">
													<label htmlFor="save-details">
													<input type="checkbox" id="save-details" name="save-details"/>
														Save My Name, Email, And Website In This Browser For The Next Time I Comment.
													</label>
												</div>
												<div className="review-form-field">
													<label>Your Rating<span className="required">*</span></label>
													<div className="rate">
													    <input type="radio" id="star5" name="rate" value="5" />
													    <label htmlFor="star5" title="text">5 stars</label>
													    <input type="radio" id="star4" name="rate" value="4" />
													    <label htmlFor="star4" title="text">4 stars</label>
													    <input type="radio" id="star3" name="rate" value="3" />
													    <label htmlFor="star3" title="text">3 stars</label>
													    <input type="radio" id="star2" name="rate" value="2" />
													    <label htmlFor="star2" title="text">2 stars</label>
													    <input type="radio" id="star1" name="rate" value="1" />
													    <label htmlFor="star1" title="text">1 star</label>
													</div>
												</div>
												<div className="review-form-field">
													<label htmlFor="user-review">Your Review <span className="required">*</span></label>
													<textarea name="review" id="user-review"></textarea>
												</div>
												<button type="submit">Submit</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="related-product-section">
				<div className="related-product-title">
					<h2>Related Products</h2>
				</div>
				<div className="realted-product-content">
					<div className="container">
						<div className="related-product-list">
							<div className="row">
								<div className="col-md-4">
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
						      	</div>
						      	<div className="col-md-4">
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
						      	</div>
						      	<div className="col-md-4">
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


export default ShopDetails;