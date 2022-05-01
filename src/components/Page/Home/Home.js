import React from 'react';
import usePerfume from '../../../hooks/usePerfume';
import Carousel from '../Carousel/Carousel';
import HomePageProduct from '../HomePageProduct/HomePageProduct';
import NewCollection from '../NewCollection/NewCollection';

const Home = () => {
  const [perfumes, setPerfumes] = usePerfume();
  const last6 = perfumes.slice(19, 25);
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
      <NewCollection></NewCollection>
    </div>
  );
};

export default Home;