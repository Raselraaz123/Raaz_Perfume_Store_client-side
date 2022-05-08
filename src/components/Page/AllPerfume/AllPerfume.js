import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllPerfume.css'

const AllPerfume = ({ perfume }) => {
  const {_id,Quantity,name,picture,price,shortDescripttion,supplierName}=perfume
  const navigate = useNavigate();

  const handleToPerfumeDetail = id => {
    navigate(`/AllPerfume/${id}`);
  }

  return (
    <div className="perfume-container ">
      <img height={250}  src={picture} alt="" />
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
        <button
        onClick={()=>handleToPerfumeDetail(_id)}
          className='btn btn-primary bton-posi'>Update</button>
      </div>
    </div>
  );
};

export default AllPerfume;