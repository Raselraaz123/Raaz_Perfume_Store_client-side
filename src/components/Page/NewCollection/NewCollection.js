import React from 'react';
import usePerfume from '../../../hooks/usePerfume';
import NewCollectionItem from '../NewCollectionItem/NewCollectionItem';

const NewCollection = () => {
   const [perfumes, setPerfumes] = usePerfume();
   const midIterm = perfumes.slice(10, 17);
  return (
    <div>
      <h1 className="text-center mb-5 text-danger">Our latest collection</h1>
      <div className='inventore-item-container'>
        {midIterm.map((perfume) => (
          <NewCollectionItem
            key={perfume._id}
            perfume={perfume}
          ></NewCollectionItem>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;