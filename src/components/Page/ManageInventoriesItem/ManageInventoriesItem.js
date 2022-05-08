import React from 'react';
// import usePerfume from '../../../hooks/usePerfume';

const ManageInventoriesItem = ({ perfume, handleDelete }) => {
  // const [perfumes, setPerfumes] = usePerfume();
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
      <img height={250} src={picture} alt="" />
      <h3>Name : {name}</h3>
      <h4>supplier Name : {supplierName}</h4>
      <p>
        <small>{shortDescripttion}</small>
      </p>
      <h4> price : {price}</h4>
      <button
        onClick={() => handleDelete(perfume._Id)}
        className="btn btn-danger"
      >
        Delete item
      </button>
    </div>
  );
};

export default ManageInventoriesItem;