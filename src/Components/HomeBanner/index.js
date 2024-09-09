import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,
    arrow:true
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hfe/hf1/33231749447710/Indian-wear-web-----2024-07--27-new-hpmain.jpg"
            alt="Banner"
            className="w-100"
          />
        </div>

        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h96/he1/33227906023454/beauty-web_46-bu.jpg"
            alt="Banner"
            className="w-100"
          />
        </div>

        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hbc/h99/33231761670174/Menswear-web----2024--07--27--hpmain%20carousel.jpg"
            alt="Banner"
            className="w-100"
          />
        </div>

        
        <div className="item">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h7d/h33/33231755378718/Watches-web---2024--07--27--new--hp-pg.jpg"
            alt="Banner"
            className="w-100"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
