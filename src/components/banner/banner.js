import React from 'react';
import '../../static/css/index.css';
import '../../static/css/front.css';
import banner_1 from '../../static/images/banner_1.png';
import banner_2 from '../../static/images/banner_2.png';
import banner_3 from '../../static/images/banner_3.png';
import banner_4 from '../../static/images/banner_4.png';
import banner_5 from '../../static/images/banner_5.png';
import banner_6 from '../../static/images/banner_6.png';
import Swiper from 'swiper';
import $ from 'jquery';
import '../../static/script/slick.min.js';

class BannerCommpent extends React.Component {

      constructor(props) {
				super(props);
			}
			
			componentWillMount() {

			}

			componentDidMount() {
					$('.slick').slick({
						autoplay:true,
						speed:1500,
						touchMove:true,
						autoplaySpeed:2000,
						arrows:true,
						swipe:true,
						useCSS:true,
						lazyLoad:'ondemand',
					})
			}

			componentWillUnmount() {

			}

      render(){
        return (
					<div className="layer_main">
						<div className="banner">
							<div className="slick">
								<div><img src={banner_1} alt=""/></div>
								<div><img src={banner_2} alt=""/></div>
								<div><img src={banner_3} alt=""/></div>
								<div><img src={banner_4} alt=""/></div>
								<div className="layer_img"><img src={banner_5} alt=""/></div>
								<div className="layer_img1"><img src={banner_6} alt=""/></div>
							</div>
						</div>
					</div>
        );
      }

}

export {BannerCommpent}