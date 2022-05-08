import React from 'react';
import { useParams } from 'react-router-dom';
import usePerfumeDetail from '../../../hooks/usePerfumeDetail';
import './AllPerfumeDetail.css'

const AllPerfumeDetail = () => {
  const { perfumeId } = useParams();
  const [perfume] = usePerfumeDetail(perfumeId)
  console.log(perfume)
  return (
    <div>
      <div className="prefume-Detail-container">
        <div>
          <p>
            <strong>Id : </strong> {perfume._id}
          </p>
          <h1>Name : {perfume.name}</h1>
          <h4>price:{perfume.price}</h4>
          <img height={250} src={perfume.picture} alt="" />
          <h4>Quantity : {perfume.Quantity}</h4>
          <input type="number" name="" id="" />
          <br />
          <button className=" btn btn-primary mt-2">Deliverad</button>
        </div>
        <div className='bg-color '>
          <h2 className="text-center">Update quantity From</h2>
          <label htmlFor="">Quantity</label><br />
          <input type="number" name="number" id="" placeholder="quantity" /><br />
          <button className='btn btn-primary mt-2'>Update</button>
        </div>
      </div>
    </div>
  );
};

export default AllPerfumeDetail;