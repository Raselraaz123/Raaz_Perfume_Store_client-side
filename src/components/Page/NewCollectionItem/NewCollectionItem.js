import React from 'react';

const NewCollectionItem = ({ perfume }) => {
  const {
    _id,
    Quantity,
    name,
    picture,
    price,
    shortDescripttion,
    supplierName,
  } = perfume;
  return (
    <div>
      <div className="perfume-container">
        <img height={250} src={picture} alt="" />
        <div className="artical-area">
          <h4>Name :{name}</h4>
          <h5>supplier : {supplierName}</h5>
         
          <h6>
            Quantity: <span>{Quantity}</span>
          </h6>
          <h5>
            Price: $ <span>{price}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default NewCollectionItem;