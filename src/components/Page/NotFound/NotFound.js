import React from 'react';
import not from '../../../img/404/404.jpg'

const NotFound = () => {
  return (
    <div>
      <h1>ERROR 404 PAGE NOT FOUND</h1>
      <div>
        <img src={not} alt="" />
      </div>
    </div>
  );
};

export default NotFound;