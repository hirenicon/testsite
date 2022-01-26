import React,{lazy,Suspense} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/CheckOut.css';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));

const CartCheckout = () =>{
	return(
		<>
			<Suspense fallback={<div></div>}>
				<Header activeLink="Shop"/>
			</Suspense>
			<div className="page-intro-banner">
				<div className="page-banner-bg">
					<div className="page-banner-title">
						<h2>CheckOut Page</h2>
					</div>
					<div className="page-banner-content">
						<h4>Home</h4>
						<span><i className="fas fa-chevron-right"></i></span>
						<h4>Checkout</h4>
					</div>
				</div>
			</div>
			<div className="product-checkout-area">
				<div className="checkout-content">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<div className="checkout-form">
									<form>
										<div className="form-title">
											<h2>Billing Details</h2>
										</div>
										<fieldset className="checkout-add-flex">
											<label>
												FirstName <span>*</span>
												<input type="text" name="firstname"/>
											</label>
											<label>
												LastName <span>*</span>
												<input type="text" name="lastname"/>
											</label>
										</fieldset>
										<fieldset>
											<label>
												Company Name <span>*</span>
												<input type="text" name="companyname" />
											</label>
										</fieldset>
										<fieldset>
											<label>
												Country <span>*</span>
												<select name="country" defaultValue=" ">
													<option value=""></option>
													<option value="India">India</option>
													<option value="USA">USA</option>
													<option value="Japan">Japan</option>	
												</select>
											</label>
										</fieldset>
										<fieldset>
											<label>
												Address <span>*</span>
												<input type="text" name="streetaddress" placeholder="Street address"/>
												<input type="text" name="appartmentaddress" placeholder="Apartment, suite, unit etc. (optional)"/>
											</label>
										</fieldset>
										<fieldset>
											<label>
												Town/City<span>*</span>
												<input type="text" name="townaddress"/>
											</label>
										</fieldset>
										<fieldset className="checkout-add-flex">
											<label>
												State/Country <span>*</span>
												<input type="text" name="state"/>
											</label>
											<label>
												Postcode/Zip <span>*</span>
												<input type="text" name="postcode"/>
											</label>
										</fieldset>
										<fieldset className="checkout-add-flex">
											<label>
												Phone <span>*</span>
												<input type="text" name="phone"/>
											</label>
											<label>
												Email Address <span>*</span>
												<input type="text" name="email"/>
											</label>
										</fieldset>
										<fieldset>
											<label>
												Order Notes <span>*</span>
												<textarea name="oreder-notes" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
											</label>
										</fieldset>
									</form>
								</div>
							</div>
							<div className="col-md-4">
								<div className="checkout-product-details">
									<div className="checkout-product-title">
										<h2>Your Order</h2>
									</div>
									<div className="checkout-product-content">
										<div className="checkout-product-row">
											<span>Sweatshirts</span>
											<span>$299.00</span>
										</div>
										<div className="checkout-product-row">
											<span>Subtotal</span>
											<span>$299.00</span>
										</div>
										<div className="checkout-product-row">
											<span>Shipping</span>
											<span>$100.00</span>
										</div>
										<div className="checkout-product-total-row">
											<h5>Order Total</h5>
											<span>$399.00</span>
										</div>
									</div>
									<div className="checkout-product-button">
										<Link to="/">Place Order</Link>
									</div>
								</div>
							</div>
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

export default CartCheckout;