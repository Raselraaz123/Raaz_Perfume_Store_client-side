import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewCollectionItem = ({ perfume }) => {

  const navigate = useNavigate();

  const handleToPerfumeDetail = (id) => {
    navigate(`/AllPerfume/${id}`);
  };

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
      <div className="perfume-container mb-5">
        <img height={250} src={picture} alt="" />
        <div className="artical-area">
          <h4>Name :{name}</h4>
          <h5>supplier : {supplierName}</h5>
          <p>{shortDescripttion}</p>
          <h6>
            Quantity: <span>{Quantity}</span>
          </h6>
          <h5>
            Price: $ <span>{price}</span>
          </h5>
          <button
            onClick={() => handleToPerfumeDetail(_id)}
            className="btn btn-primary bton-posi"
          >
          Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCollectionItem;