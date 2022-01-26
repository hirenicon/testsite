import React,{lazy,Suspense} from 'react';
import '../CSS/Cart.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';


const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const InstagramSection = lazy(() => import('./InstagramSection'));

class Cart extends React.Component{

	componentDidMount(){
		$('.cart-product-qty .addQty').on('click',function(){
  			$($(this).parent()[0]).children()[1].innerHTML = parseInt($($(this).parent()[0]).children()[1].innerHTML) + 1;
  			let elementParent = $($($($(this).parent()[0]).parent()[0]).parent()[0]).parent()[0]
  			let elementPrice = $($($(elementParent).children()[2]).children()[0]).children()[0].innerHTML
  			let elementTotalPrice = $($($(elementParent).children()[4]).children()[0]).children()[0]
  			elementTotalPrice.innerHTML = '$'+(parseFloat(elementPrice.substr(1,elementPrice.length-1)) * parseInt($($(this).parent()[0]).children()[1].innerHTML)).toFixed(2)
  			changeTotal();
  		})
  		$('.cart-product-qty .removeQty').on('click',function(){
  			if(parseInt($($(this).parent()[0]).children()[1].innerHTML) > 1){
  				$($(this).parent()[0]).children()[1].innerHTML = parseInt($($(this).parent()[0]).children()[1].innerHTML) - 1;
  			}
  			let elementParent = $($($($(this).parent()[0]).parent()[0]).parent()[0]).parent()[0]
  			let elementPrice = $($($(elementParent).children()[2]).children()[0]).children()[0].innerHTML
  			let elementTotalPrice = $($($(elementParent).children()[4]).children()[0]).children()[0]
  			elementTotalPrice.innerHTML = '$'+(parseFloat(elementPrice.substr(1,elementPrice.length-1)) * parseInt($($(this).parent()[0]).children()[1].innerHTML)).toFixed(2)
  			changeTotal();
  		})

  		$('.cart-product-delete').on('click',function(){
  			$($(this).parent()[0]).parent()[0].remove();
  		})

  		function changeTotal(){
  			let priceTotal = 0
  			$('.cart-product-final-price').each(function(e){
  				let elemValue = $($('.cart-product-final-price')[e]).children()[0].innerHTML
  				priceTotal += parseFloat(elemValue.substr(1,elemValue.length-1))
  				
  			})
  			$('.cart-product-sub-total').children()[1].innerHTML = '$'+priceTotal.toFixed(2)
  			let totalQty = 0;
  			$('.cart-product').each(function(e){
  				totalQty += parseInt($('.cart-product')[e].innerHTML)
  			})
  			$('.cart-product-shipping-fee-total').children()[1].innerHTML = '$'+totalQty*10;
  			$('.cart-product-total').children()[1].innerHTML = '$'+(priceTotal+(totalQty*10)).toFixed(2);
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
								<table>
									<thead>
										<tr>
											<th></th>
											<th>Product</th>
											<th>unit Price</th>
											<th>Qty</th>
											<th>Price</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className="cart-product-delete">
													x
												</div>
											</td>
											<td>
												<div className="cart-product-details">
													<img src="/img/product_bottoms.jpg" alt=" "/>
													<h3>Crew Sweatshirt</h3>
												</div>
											</td>
											<td>
												<div className="cart-product-price">
													<h4>$60.00</h4>
												</div>
											</td>
											<td>
												<div className="cart-product-qty">
													<span>
														<h4 className="removeQty"><i className="fas fa-minus"></i></h4>
														<h4 className="cart-product">1</h4>
														<h4 className="addQty"><i className="fas fa-plus"></i></h4>
													</span>
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
												<div className="cart-product-delete">
													x
												</div>
											</td>
											<td>
												<div className="cart-product-details">
													<img src="/img/product_bottoms.jpg" alt=" "/>
													<h3>Crew Sweatshirt</h3>
												</div>
											</td>
											<td>
												<div className="cart-product-price">
													<h4>$60.00</h4>
												</div>
											</td>
											<td>
												<div className="cart-product-qty">
													<span>
														<h4 className="removeQty"><i className="fas fa-minus"></i></h4>
														<h4 className="cart-product">1</h4>
														<h4 className="addQty"><i className="fas fa-plus"></i></h4>
													</span>
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
							<div className="cart-product-total-area">
								<div className="container">
									<div className="row">
										<div className="col-md-6">
											<div className="cart-voucher">
												<input type="text" name="voucher-code" placeholder="Voucher Code"/>
												<button>Redeem</button>
											</div>
										</div>
										<div className="col-md-6">
											<div className="cart-total-container">
												<div className="cart-product-total-area">
													<div className="cart-product-sub-total">
														<span>Subtotal</span>
														<span>$120.00</span>
													</div>
													<div className="cart-product-shipping-fee-total">
														<span>Shipping fee</span>
														<span>$20</span>
													</div>
													<div className="cart-product-coupon">
														<span>Coupon</span>
														<span>No</span>
													</div>
												</div>
												<div className="cart-product-total">
													<h4>Total</h4>
													<h4>$140.00</h4>
												</div>
												<div className="cart-product-checkout-button">
													<Link to="/cartcheckout">Check out</Link>
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