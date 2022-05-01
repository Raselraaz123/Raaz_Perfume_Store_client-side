import React from 'react';
import './AllPerfume.css'

const AllPerfume = ({ perfume }) => {
  const {_id,Quantity,name,picture,price,shortDescripttion,supplierName}=perfume
  console.log(perfume);
  return (
    <div className="perfume-container">
      <img height={250} src={picture} alt="" />
      <div className='artical-area'>
        <h4>Name :{name}</h4>
        <h5>supplier : {supplierName}</h5>
        <p>
          <small>{shortDescripttion}</small>
        </p>
        <h6>
          Quantity: <span>{Quantity}</span>
        </h6>
        <h5>
          Price: $ <span>{price}</span>
        </h5>
      </div>
    </div>
  );
};

export default AllPerfume;