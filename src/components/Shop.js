import React,{useState,useEffect,lazy,Suspense } from 'react';
import '../CSS/Shop.css';
import Slider from '@mui/material/Slider';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';
import $ from 'jquery';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const InstagramSection = lazy(() => import('./InstagramSection'));

const products_arrayold = [
	{id:1,product_name:'Sweatshirts',img:'/img/product_sweatshirt_2.webp',price:45,size:'S'},
	{id:2,product_name:'Bottoms',img:'/img/product_bottoms.webp',price:40,size:'S'},
	{id:3,product_name:'Shirts',img:'/img/product_img_3.webp',price:35,size:'S'},
	{id:4,product_name:'Sweatshirts',img:'/img/product_sweatshirt_2.webp',price:45,size:'M'},
	{id:5,product_name:'Bottoms',img:'/img/product_bottoms.webp',price:40,size:'M'},
	{id:6,product_name:'Shirts',img:'/img/product_img_3.webp',price:35,size:'M'},
	{id:7,product_name:'Sweatshirts',img:'/img/product_sweatshirt_2.webp',price:45,size:'L'},
	{id:8,product_name:'Bottoms',img:'/img/product_bottoms.webp',price:40,size:'L'},
	{id:9,product_name:'Shirts',img:'/img/product_img_3.webp',price:35,size:'L'},
	{id:10,product_name:'Sweatshirts',img:'/img/product_sweatshirt_2.webp',price:45,size:'XL'},
	{id:11,product_name:'Bottoms',img:'/img/product_bottoms.webp',price:40,size:'XL'},
	{id:12,product_name:'Shirts',img:'/img/product_img_3.webp',price:35,size:'XL'},
	];

var products_array = [
	{id:1,product_name:'Sweatshirts',img:'/img/product_sweatshirt_2.webp',price:45,size:'S'},
	{id:2,product_name:'Bottoms',img:'/img/product_bottoms.webp',price:40,size:'S'},
	{id:3,product_name:'Shirts',img:'/img/product_img_3.webp',price:35,size:'S'},
	{id:4,product_name:'Sweatshirts',img:'/img/product_sweatshirt_2.webp',price:45,size:'M'},
	{id:5,product_name:'Bottoms',img:'/img/product_bottoms.webp',price:40,size:'M'},
	{id:6,product_name:'Shirts',img:'/img/product_img_3.webp',price:35,size:'M'},
	{id:7,product_name:'Sweatshirts',img:'/img/product_sweatshirt_2.webp',price:45,size:'L'},
	{id:8,product_name:'Bottoms',img:'/img/product_bottoms.webp',price:40,size:'L'},
	{id:9,product_name:'Shirts',img:'/img/product_img_3.webp',price:35,size:'L'},
	{id:10,product_name:'Sweatshirts',img:'/img/product_sweatshirt_2.webp',price:45,size:'XL'},
	{id:11,product_name:'Bottoms',img:'/img/product_bottoms.webp',price:40,size:'XL'},
	{id:12,product_name:'Shirts',img:'/img/product_img_3.webp',price:35,size:'XL'},
	];

const Shop = () =>{
	const [value,setValue] = useState([0,100]);
	const [updatedst,setUpdated] = useState(0);
	const updateValue = (e,item)=>{
		setValue(item);
	}

	setTimeout(()=>{
		$('.shop-category-option ul li').on('click',function(){
			$('.shop-category-option ul li span').each(function(e){
				$(this)[0].classList.remove('active');
			})
			$(this).children()[1].classList.add('active');
			var getName = $(this).children()[1].innerHTML;

			$('.shop-product-card').each(function(e){
				let elem = $('.shop-product-card')[e]
				if($('.shop-product-img-content .shop-product-name')[e].innerHTML === getName){
					$(elem).parent()[0].classList.remove('category-hide');
				}else if(getName === 'All'){
					$(elem).parent()[0].classList.remove('category-hide');
				}else{
					$(elem).parent()[0].classList.add('category-hide');
				}
			})
		})

		$('.sort-product-by').on('change',function(){
			let allelemvaluearr = [];
			let getAllElemPos = [];
			$('.shop-product').each(function(e){
				let elem = $('.shop-product')[e]
				let gettedValue = $($($(elem).children()[0]).children()[1]).children()[1].innerHTML.split('$');
				allelemvaluearr.push(parseInt(gettedValue[1]));
				getAllElemPos.push(e);
			})
			if($(this)[0].value === 'Low To High'){
				allelemvaluearr.sort();
				let newArray = []
				for(let i=0; i<allelemvaluearr.length; i++){
					for(let j=0; j<products_array.length; j++){
						if(allelemvaluearr[i] === products_array[j].price){
							let aa = newArray.map((pp)=>{
								if(products_array[j].id !== pp.id){
									return true
								}else{
									return false
								}
							})

							if(aa.indexOf(false) === -1 && aa.length !== 0){
								newArray.push(products_array[j]);
							}else if(aa.length === 0){
								newArray.push(products_array[j]);
							}
						}
					}
				}
				products_array = newArray;
				setUpdated(updatedst+1);
			}else if($(this)[0].value === 'High To Low'){
				allelemvaluearr.reverse();
				let newArray = []
				for(let i=0; i<allelemvaluearr.length; i++){
					for(let j=0; j<products_array.length; j++){
						if(allelemvaluearr[i] === products_array[j].price){
							let aa = newArray.map((pp)=>{
								if(products_array[j].id !== pp.id){
									return true
								}else{
									return false
								}
							})

							if(aa.indexOf(false) === -1 && aa.length !== 0){
								newArray.push(products_array[j]);
							}else if(aa.length === 0){
								newArray.push(products_array[j]);
							}
						}
					}
				}
				products_array = newArray;
				setUpdated(updatedst+1);
			}else if($(this)[0].value === 'New Product'){
				let newArray = []
				for(let i=products_arrayold.length-1; i>-1; i--){
					newArray.push(products_arrayold[i]);
				}
				products_array = newArray;
				setUpdated(updatedst+1);
			}else if($(this)[0].value === 'Old Product'){
				products_array = products_arrayold;
				setUpdated(updatedst+1);
			}else{
				products_array = products_arrayold;
				setUpdated(updatedst+1);
			}
		})

		$('.shop-category-option-2 ul li').on('click',function(){
			$('.shop-category-option-2 ul li span').each(function(e){
				$(this)[0].classList.remove('active');
			})

			$(this).children()[1].classList.add('active');
			var getName = $(this).children()[1].innerHTML;
			$('.shop-product-card').each(function(e){
				let elem = $('.shop-product-card')[e]
				if($('.shop-product-img-content .shop-product-size')[e].value === getName){
					$(elem).parent()[0].classList.remove('size-hide');
				}else if(getName === 'All'){
					$(elem).parent()[0].classList.remove('size-hide');
				}else{
					$(elem).parent()[0].classList.add('size-hide');
				}
			})
		})

		$('.products-show-pagination ul li.previous a')[0].innerHTML = '<i class="fas fa-chevron-left"></i>';
		$('.products-show-pagination ul li.next a')[0].innerHTML = '<i class="fas fa-chevron-right"></i>';
	},500)

	function Items({ currentItems }) {
	  return (
	    <>
	      {currentItems &&
	        currentItems.map((product) => (
	        	<div className="col-lg-4 col-md-6 shop-product" key={product.id}>
		        	<div className="shop-product-card">
			        	<div className="shop-product-img">
				        	{<img alt="product-img" src={product.img}/>}
				        	<div className="product-img-content">
				        		<a href="/"><span><i className="fas fa-shopping-cart"></i></span> Add to cart</a>
				        	</div>
			        	</div>
			        	<div className="shop-product-img-content">
				        	<Link to={"/shopDetails?name="+product.product_name} className="shop-product-name">
				        	{product.product_name}
				        	</Link>
			        		<input type="hidden" className="shop-product-size" value={product.size}/>
			        		<div className="shop-product-price">${product.price}</div>
			        	</div>
		        	</div>
	        	</div>
	        ))}
	    </>
	  );
	}

	function PaginatedItems({ itemsPerPage }) {
		const [currentItems, setCurrentItems] = useState(null);
		const [pageCount, setPageCount] = useState(0);
		const [itemOffset, setItemOffset] = useState(0);

		useEffect(() => {
			const endOffset = itemOffset + itemsPerPage;
			setCurrentItems(products_array.slice(itemOffset, endOffset));
			setPageCount(Math.ceil(products_array.length / itemsPerPage));
		}, [itemOffset, itemsPerPage]);


		const handlePageClick = (event) => {
			const newOffset = (event.selected * itemsPerPage) % products_array.length;
			setItemOffset(newOffset);
		};

	  return (
	    <>
		    <Items currentItems={currentItems} />
		    <ReactPaginate
		        breakLabel="..."
		        nextLabel="next >"
		        onPageChange={handlePageClick}
		        pageRangeDisplayed={5}
		        pageCount={pageCount}
		        previousLabel="< previous"
		        renderOnZeroPageCount={null}
		      />
	    </>
	  );
	}

	useEffect(()=>{
		function fetchProductByValue(){
			setTimeout(()=>{
				$('.shop-product').each(function(e){
					let elem = $('.shop-product')[e]
					if($(elem)[0].classList.contains('category-hide')){
						let gettedValue = $($($(elem).children()[0]).children()[1]).children()[2].innerHTML.split('$');
						if(parseInt(gettedValue[1]) >= value[0] && parseInt(gettedValue[1]) <= value[1]){
							$(elem)[0].classList.remove('price-hide');
						}else{
							$(elem)[0].classList.add('price-hide');
						}
					}else{
						let gettedValue = $($($(elem).children()[0]).children()[1]).children()[2].innerHTML.split('$');
						if(parseInt(gettedValue[1]) >= value[0] && parseInt(gettedValue[1]) <= value[1]){
							$(elem)[0].classList.remove('price-hide');
						}else{
							$(elem)[0].classList.add('price-hide');
						}
					}

					if($(elem)[0].classList.contains('size-hide')){
						let gettedValue = $($($(elem).children()[0]).children()[1]).children()[2].innerHTML.split('$');
						if(parseInt(gettedValue[1]) >= value[0] && parseInt(gettedValue[1]) <= value[1]){
							$(elem)[0].classList.remove('price-hide');
						}else{
							$(elem)[0].classList.add('price-hide');
						}
					}else{
						let gettedValue = $($($(elem).children()[0]).children()[1]).children()[2].innerHTML.split('$');
						if(parseInt(gettedValue[1]) >= value[0] && parseInt(gettedValue[1]) <= value[1]){
							$(elem)[0].classList.remove('price-hide');
						}else{
							$(elem)[0].classList.add('price-hide');
						}
					}
				})
			},500)
		}
		fetchProductByValue();
	},[value]);

	return(
		<>
			<Suspense fallback={<div></div>}>
				<Header activeLink="Shop"/>
			</Suspense>
			<div className="page-intro-banner">
				<div className="page-banner-bg">
					<div className="page-banner-title">
						<h2>Product</h2>
					</div>
					<div className="page-banner-content">
						<h4>Home</h4>
						<span><i className="fas fa-chevron-right"></i></span>
						<h4>Product</h4>
					</div>
				</div>
			</div>
			<div className="shop-page-product">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3">
							<div className="shop-product-categories">
								<div className="shop-product-category-section">
									<div className="shop-category-tab">
										<div className="shop-category-title">
											<h4>Categories</h4>
										</div>
										<div className="shop-category-option">
											<ul>
												<li>
													<span><i className="fas fa-angle-right"></i></span>
													<span className="shop-category active">All</span>
												</li>
												<li>
													<span><i className="fas fa-angle-right"></i></span>
													<span className="shop-category">Shirts</span>
												</li>
												<li>
													<span><i className="fas fa-angle-right"></i></span>
													<span className="shop-category">Sweatshirts</span>
												</li>
												<li>
													<span><i className="fas fa-angle-right"></i></span>
													<span className="shop-category">Bottoms</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="shop-product-category-section">
									<div className="shop-category-tab">
										<div className="shop-category-title">
											<h4>Price Filter</h4>
										</div>
										<div className="shop-category-option">
											<div className="showd value">
												<span>${value[0]}</span> - 
												<span>${value[1]}</span>
											</div>
											<Slider value={value} max={100} onChange={updateValue} color="secondary"/>
										</div>
									</div>
								</div>
								<div className="shop-product-category-section">
									<div className="shop-category-tab">
										<div className="shop-category-title">
											<h4>Size</h4>
										</div>
										<div className="shop-category-option-2">
											<ul>
												<li>
													<span><i className="fas fa-angle-right"></i></span>
													<span className="shop-size active">All</span>
												</li>
												<li>
													<span><i className="fas fa-angle-right"></i></span>
													<span className="shop-size">S</span>
												</li>
												<li>
													<span><i className="fas fa-angle-right"></i></span>
													<span className="shop-size">M</span>
												</li>
												<li>
													<span><i className="fas fa-angle-right"></i></span>
													<span className="shop-size">L</span>
												</li>
												<li>
													<span><i className="fas fa-angle-right"></i></span>
													<span className="shop-size">XL</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-9 col-md-9">
							<div className="shop-product-short">
								<div className="shop-product-short">
									<span>Sort By:</span>
									<select className="sort-product-by">
										<option value="Default">Default</option>
										<option value="Low To High">Low To High</option>
										<option value="High To Low">High To Low</option>
										<option value="New Product">New Product</option>
										<option value="Old Product">Old Product</option>
									</select>
								</div>
							</div>
							<div className="shop-products">
								<div className="products-show-pagination">
									<div className="row">
										<PaginatedItems itemsPerPage={12} />
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

export default Shop;