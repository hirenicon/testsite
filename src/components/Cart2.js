import React,{lazy,Suspense} from 'react';
import '../CSS/Cart2.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const InstagramSection = lazy(() => import('./InstagramSection'));
	
class Cart extends React.Component{

	componentDidMount(){
		$('.cart-product-qty-2 .cart-product').on('change',function(){
  			let elementParent = $($($($(this).parent()[0]).parent()[0]).parent()[0]).parent()[0]
  			let elementPrice = $($($(elementParent).children()[3]).children()[0]).children()[0].innerHTML
  			let elementTotalPrice = $($($(elementParent).children()[4]).children()[0]).children()[0]
  			elementTotalPrice.innerHTML = '$'+(parseFloat(elementPrice.substr(1,elementPrice.length-1)) * parseInt($(this)[0].value)).toFixed(2)
  			changeTotal();
  		})

  		$('.cart-product-delete-2').on('click',function(){
  			$($(this).parent()[0]).parent()[0].remove();
  		})

  		function changeTotal(){
  			let priceTotal = 0
  			$('.cart-product-final-price').each(function(e){
  				let elemValue = $($('.cart-product-final-price')[e]).children()[0].innerHTML
  				priceTotal += parseFloat(elemValue.substr(1,elemValue.length-1))
  				
  			})
  			$('.cart-product-sub-total-2').children()[1].innerHTML = '$'+priceTotal.toFixed(2)
  		}
  		changeTotal();
	}

  	render(){
		return(
			<>
				<Suspense fallback={<div></div>}>
					<Header activeLink="Shop"/>
				</Suspense>
				<div className="page-intro-banner">
					<div className="page-banner-bg">
						<div className="page-banner-title">
							<h2>Cart Page</h2>
						</div>
						<div className="page-banner-content">
							<h4>Home</h4>
							<span><i className="fas fa-chevron-right"></i></span>
							<h4>Product</h4>
							<span><i className="fas fa-chevron-right"></i></span>
							<h4>Cart</h4>
						</div>
					</div>
				</div>
				<div className="cart-area">
					<div className="container-fluid">
						<div className="cart-product-area">
							<div className="product-cart-container">
								<table className="saprate-table-border">
									<thead>
										<tr>
											<th></th>
											<th>Item Description</th>
											<th>Quantity</th>
											<th>unit Price</th>
											<th>Sub Total</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className="cart-product-delete-2">
													<i className="fas fa-times-circle"></i><span>Remove</span>
												</div>
											</td>
											<td>
												<div className="cart-product-details">
													<img src="/img/product_bottoms.jpg" alt=" "/>
													<h3>Crew Sweatshirt</h3>
												</div>
											</td>
											<td>
												<div className="cart-product-qty-2">
													<span>
														<select className="cart-product">
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option value="5">5</option>
															<option value="6">6</option>
														</select>
													</span>
												</div>
											</td>
											<td>
												<div className="cart-product-price">
													<h4>$60.00</h4>
												</div>
											</td>
											<td>
												<div className="cart-product-final-price">
													<h5>$60.00</h5>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className="cart-product-delete-2">
													<i className="fas fa-times-circle"></i><span>Remove</span>
												</div>
											</td>
											<td>
												<div className="cart-product-details">
													<img src="/img/product_bottoms.jpg" alt=" "/>
													<h3>Crew Sweatshirt</h3>
												</div>
											</td>
											<td>
												<div className="cart-product-qty-2">
													<span>
														<select className="cart-product">
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option value="5">5</option>
															<option value="6">6</option>
														</select>
													</span>
												</div>
											</td>
											<td>
												<div className="cart-product-price">
													<h4>$60.00</h4>
												</div>
											</td>
											<td>
												<div className="cart-product-final-price">
													<h5>$60.00</h5>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="cart-product-total-2">
								<div className="container">
									<div className="cart-product-sub-total-2">
										<span>Total:</span>
										<span>$120.00</span>
									</div>
									<div className="cart-product-delivery-details">
										<h5>Delivery fee not included yet</h5>
									</div>
								</div>
							</div>
							<div className="cart-product-total-area">
								<div className="container">
									<div className="row">
										<div className="col-lg-6">
											<div className="cart-voucher add-bottom-margin-voucher">
												<input type="text" name="voucher-code" placeholder="Voucher Code"/>
												<button>Redeem</button>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="cart2-total-container">
												<div className="cart2-product-checkout-button">
													<Link to="/">Continue Shopping</Link>
												</div>
												<div className="cart2-product-checkout-button">
													<Link to="/cartcheckout">Procced to Checkout</Link>
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
}

export default Cart;