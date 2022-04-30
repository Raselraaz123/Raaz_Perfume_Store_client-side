import React from 'react';
import not from '../../../img/404/404.jpg'
import './NotFound.css'

const NotFound = () => {
  return (
    <div>
      <h1 className='text-center text-danger mt-5 mb-3'>ERROR 404 PAGE NOT FOUND</h1>
      <div>
        <img className='mx-auto d-flex rounded  w-75'  src={not} alt="" />
      </div>
    </div>
  );
};

export default NotFound;