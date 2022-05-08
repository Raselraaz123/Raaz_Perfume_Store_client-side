import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePerfume from '../../../hooks/usePerfume';
import useReview from '../../../hooks/useReview';
import Carousel from '../Carousel/Carousel';
import HomePageProduct from '../HomePageProduct/HomePageProduct';
import HomePageReview from '../HomePageReview/HomePageReview';
import NewCollection from '../NewCollection/NewCollection';
import './Home.css'

const Home = () => {
  const [perfumes, setPerfumes] = usePerfume();
  const [reviews, setReviews] = useReview();
  const last6 = perfumes.slice(19, 25);
  const navigate = useNavigate();

  const handleManageInventories = () => {
    navigate('/manageInventories')
  }
  return (
    <div>
      <Carousel></Carousel>
      <div className="inventore-item-container mt-5 mb-5">
        {last6.map((perfume) => (
          <HomePageProduct
            key={perfume._id}
            perfume={perfume}
          ></HomePageProduct>
        ))}
      </div>
      <div className='btn-posi'>
     
        <button
          onClick={handleManageInventories}
          className="btn btn-info font-size">Manage Inventories</button>
      </div>
      <NewCollection></NewCollection>
      <h1 className="text-center mb-5">The Latest Perfume Reviews</h1>
      <div className="review-item">
        {reviews.map((review) => (
          <HomePageReview key={review._id} review={review}></HomePageReview>
        ))}
      </div>
    </div>
  );
};

export default Home;