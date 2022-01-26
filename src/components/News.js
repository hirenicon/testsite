import React,{useState,useEffect,lazy,Suspense} from 'react';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';
import '../CSS/News.css';
import $ from 'jquery';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const InstagramSection = lazy(() => import('./InstagramSection'));

const news_array = [
	{id:1,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:2,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:3,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:4,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:5,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:6,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:7,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:8,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:9,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:10,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:11,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:12,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:13,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:14,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:15,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:16,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:17,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:18,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:19,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:20,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:21,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	{id:22,date:'24 Nov',comment_user:'ilonamaher',total_comments:19,news_title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit',news_content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
	];


const News = () =>{

	function Items({ currentItems }) {
	  return (
	    <>
	      {currentItems &&
	        currentItems.map((news) => (
	        	<div className="col-lg-4 col-md-6 shop-product" key={news.id}>
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
	        						<span>{news.date}</span>
	        					</div>
	        					<div className="news-comment">
						        	<div className="comment-user"><i className="fas fa-user"></i><a href="/">{news.comment_user}</a></div>
						        	<div className="total-comments"><i className="fas fa-comments"></i><a href="/">{news.total_comments}</a></div>
		        				</div>
	        				</div>
	        				<div className="news-content">
					        	<h3>{news.news_title}</h3>
					        	<p>{news.news_content}</p>
				        	</div>
	        				<div className="news-more">
	        					<Link to={"/blogDetails?id="+news.id}>Learn Now</Link>
	        				</div>
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
			setCurrentItems(news_array.slice(itemOffset, endOffset));
			setPageCount(Math.ceil(news_array.length / itemsPerPage));
		}, [itemOffset, itemsPerPage]);


		const handlePageClick = (event) => {
			const newOffset = (event.selected * itemsPerPage) % news_array.length;
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

	setTimeout(()=>{
		$('.news-page-section ul li.previous a')[0].innerHTML = '<i class="fas fa-chevron-left"></i>';
		$('.news-page-section ul li.next a')[0].innerHTML = '<i class="fas fa-chevron-right"></i>';
	},500)

	return(
		<>
			
			<Suspense fallback={<div></div>}>
				<Header activeLink="News"/>
			</Suspense>
			<div className="page-intro-banner">
				<div className="page-banner-bg">
					<div className="page-banner-title">
						<h2>Blog Page</h2>
					</div>
					<div className="page-banner-content">
						<h4>Home</h4>
						<span><i className="fas fa-chevron-right"></i></span>
						<h4>Blog</h4>
					</div>
				</div>
			</div>
			<div className="news-page-section">
				<div className="container">
					<div className="row">
						<PaginatedItems itemsPerPage={12} />
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

export default News;