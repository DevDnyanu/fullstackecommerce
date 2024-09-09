import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg.png";
import banner2 from "../../assets/images/banner2.jpg.jpg";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import Card1 from "../../assets/images/Card1.jpg";
import Card2 from "../../assets/images/Card2.jpg";
import newsLetterSection from "../../assets/images/Newsbanner1.jpg";
import { IoMailOutline } from "react-icons/io5";


const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat/>


      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              
              <div className="sticky">
              <div className="banner">
                <img src={banner1} alt="banner" className="cursor w-100" />
              </div>

              <div className="banner mt-4">
                <img src={banner2} alt="banner" className="cursor w-100" />
             
              </div>
              </div>

            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Best Sellers</h3>
                  <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{ clickable: true }}
                  className="mySwiper">

                  <SwiperSlide>
                  <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                  <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                  <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                  <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                  <ProductItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                  <ProductItem/>
                  </SwiperSlide>

                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-4">
                <div className="info w-75">
                  <h3 className="mb-0 hd ">New Products</h3>
                  <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row productRow2 w-100 mt-4 d-flex">
                 
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>
                 <ProductItem/>


              </div>

            <div className="d-flex mt-4 mb-5 bannerSec">
               <div className="banner">
                <img src={Card1} alt="banner" className="cursor w-100" />
              </div>
              <div className="banner">
                <img src={Card2} alt="banner" className="cursor w-100" />
              </div>
            </div>

            </div>

          </div>
        </div>
      </section>


       <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">$20 discount for your first order</p>
              <h3 className="text-white">Join our newslatter and get...</h3>
              <p className="text-light">Join our email subscription now to get update on 
              <br/> promotions and coupons.</p>


               <form>
               <IoMailOutline/> 
                <input type="text" placeholder="Your Email Address" />
                <Button>subscription</Button>
               </form>

            </div>
            <div className="col-md-6 danya">
               <img src={newsLetterSection} alt="" />

             </div>
           </div>
        </div>
       \</section>

    

    </>
  );
};

export default Home;
