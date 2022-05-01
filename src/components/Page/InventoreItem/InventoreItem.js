import React from 'react';
import usePerfume from '../../../hooks/usePerfume';
import AllPerfume from '../AllPerfume/AllPerfume';
import './InventoreItem.css'

const InventoreItem = () => {
  const [perfumes, setPerfumes] = usePerfume();
  // console.log(perfumes)
  return (
    <div>
 
      <h2 className='text-center mt-5 mb-4'>Perfume item</h2>
      <div className="inventore-item-container">
        {perfumes.map((perfume) => (
          <AllPerfume key={perfume._id} perfume={perfume}></AllPerfume>
        ))}
      </div>
    </div>
  );
};

export default InventoreItem;