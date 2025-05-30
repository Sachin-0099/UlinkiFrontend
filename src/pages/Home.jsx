import React, { Fragment, useState, useEffect } from 'react';
import { slider } from '../components/Schemas/images';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';
import InfSlider from '../components/InfSlider';
import CategorySection from '../components/CategorySection';
import Carousel from '../components/Carousel';
import CarouselTwo from '../components/CarouselTwo';
import CarouselThree from '../components/CarouselThree';
import CarouselFour from '../components/CarouselFour';
import Square from '../components/UI_Components/Square';
import SquareTwo from '../components/UI_Components/SquareTwo';
import Popup from '../components/Popup';


const Home = () => {

  const navigate = useNavigate();
  const Banner1 = slider[10];
  const DiscountCoupne = slider[8];
  const Banners = slider[7];
  const summer = slider[11];
  const { totalItems, totalItemsTwo, totalItemsThree, totalItemsFour } = useSelector((state) => state.products);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(timer); 
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const ShowAll = () => {
    navigate('/search-results')
  }

  return (
    <Fragment>

      <Helmet>
        <title>Ulinkit - Your Global Marketplace for Products and Services</title>
        <meta name="description" content="Discover a world of products and services on Ulinkit. Shop from various categories, explore deals, and enjoy a seamless shopping experience." />
        <link rel="canonical" href="https://www.ulinkit.com/" />
      </Helmet>

      <Slider />

      <div className="flexcol wh home">
        <p className="heading3 wh">Categories</p>
        <CategorySection />
        <div className='discount-pages'>
          <img className='banner-width' src={summer} alt='summer' />
        </div>

        <div className='best-deals-product'>
          <p className="heading3 wh">Consumer Electronics ({totalItems} items)</p>
          <p className='show-all-product' onClick={ShowAll}>Show All</p>
        </div>

        <Carousel />

        <Square />

        <p className="heading3 wh">Food And Beverages ({totalItemsTwo} items)</p>

        <CarouselTwo />

        <div className='discount-pages'>
          <img className='banner-width' src={Banner1} alt='banner' />
        </div>
        <p className="heading3 wh">Fashion And Accessories ({totalItemsThree} items)</p>

        <CarouselThree />

        <div className='discount-pages'>
          <img className='banner-width' src={DiscountCoupne} alt='banner' />
        </div>

        <SquareTwo />

        <p className="heading3 wh">Home Garden And Furniture ({totalItemsFour} items)</p>

        <CarouselFour />

        <div className='discount-pages'>
          <img className='banner-width' src={Banners} alt="banner" />
        </div>
        <p className="heading3 wh">Top Brands</p>
        <InfSlider />
      </div>

      {showPopup && <Popup onClose={closePopup} />}

    </Fragment>
  )
}

export default Home