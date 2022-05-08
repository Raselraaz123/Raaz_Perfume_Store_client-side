import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePerfume from '../../../hooks/usePerfume';
import ManageInventoriesItem from '../ManageInventoriesItem/ManageInventoriesItem';
import  './ManageInventories.css'


const ManageInventories = () => {
  const [perfumes, setPerfumes] = usePerfume()
  const navigate = useNavigate();
  
    const handleDelete = (id) => {
      const proceed = window.confirm("Are you sure this item delete?");
      if (proceed) {
        const url = `https://peaceful-crag-68907.herokuapp.com/perfume/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = perfumes.filter((perfume) => perfume._id !== id);
            setPerfumes(remaining);
          });
      }
  };
  const handleAddIttem = () => {
    navigate('/addItem')
  }
  
  return (
    <div>
      <h1 className="text-center m-5"> Manage inventories </h1>
      <div className="inventore-item-container">
        {perfumes.map((perfume) => (
          <ManageInventoriesItem
            key={perfume._id}
            perfume={perfume}
            handleDelete={handleDelete}
          ></ManageInventoriesItem>
        ))}
      </div>
      <div className='add-item'>
        <button
        onClick={handleAddIttem}
          className='btn btn-primary m-5 w-50 py-3 font-size'>Add item</button>
      </div>
    </div>
  );
};

export default ManageInventories;