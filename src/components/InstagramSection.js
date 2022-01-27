import React from 'react';
import Slider from "react-slick";
const InstagramSection = () =>{

	var instagram_settings = {
	  	customPaging: function(i) {
	        return (
	          <a href="/" className="custom-insta-post-circle">
	            <i className="fas fa-circle"></i>
	          </a>
	        );
	    },
	  	dots:true,
	    infinite: true,
	    speed: 500,
	    slidesToShow: 5,
	    slidesToScroll: 2,
	    autoplay:true,
	    autoplaySpeed: 3000,
	    responsive:[
	    	{
	    		breakpoint:1300,
	    		settings:{
	    			dots:true,
				    infinite: true,
				    speed: 500,
				    slidesToShow: 3,
				    slidesToScroll: 2,
				    autoplay:true,
				    autoplaySpeed: 3000,
	    		}
	    	},
	    	{
	    		breakpoint:650,
	    		settings:{
	    			dots:true,
				    infinite: true,
				    speed: 500,
				    slidesToShow: 2,
				    slidesToScroll: 1,
				    autoplay:true,
				    autoplaySpeed: 3000,
	    		}
	    	},
	    	{
	    		breakpoint:450,
	    		settings:{
	    			dots:true,
				    infinite: true,
				    speed: 500,
				    slidesToShow: 1,
				    slidesToScroll: 1,
				    autoplay:true,
				    autoplaySpeed: 3000,
	    		}
	    	}
	    ]
  	};

	return(
		<React.Fragment>
			<div className="home-page-instagram">
				<div className="home-page-social-title">
					<h2>Instagram</h2>		
				</div>
				<div className="home-page-social-content">
					<div className="container-fluid">
						<Slider {...instagram_settings}>
							<div className="home-page-insta-post">
								<a href="/">
									<img src="/img/product_img_2.webp" alt="inst_post"/>
									<div className="home-page-insta-post-overlay">
											<i className="fab fa-instagram"></i>
									</div>
								</a>
							</div>
							<div className="home-page-insta-post">
								<a href="/">
									<img src="/img/product_shirts.webp" alt="inst_post"/>
									<div className="home-page-insta-post-overlay">
											<i className="fab fa-instagram"></i>
									</div>
								</a>
							</div>
							<div className="home-page-insta-post">
								<a href="/">
									<img src="/img/product_img_2.webp" alt="inst_post"/>
									<div className="home-page-insta-post-overlay">
											<i className="fab fa-instagram"></i>
									</div>
								</a>
							</div>
							<div className="home-page-insta-post">
								<a href="/">
									<img src="/img/about_us_video.webp" alt="inst_post"/>
									<div className="home-page-insta-post-overlay">
											<i className="fab fa-instagram"></i>
									</div>
								</a>
							</div>
							<div className="home-page-insta-post">
								<a href="/">
									<img src="/img/product_bottoms.webp" alt="inst_post"/>
									<div className="home-page-insta-post-overlay">
											<i className="fab fa-instagram"></i>
									</div>
								</a>
							</div>
							<div className="home-page-insta-post">
								<a href="/">
									<img src="/img/product_img_3.webp" alt="inst_post"/>
									<div className="home-page-insta-post-overlay">
											<i className="fab fa-instagram"></i>
									</div>
								</a>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default InstagramSection;