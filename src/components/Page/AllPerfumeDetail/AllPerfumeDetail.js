import React from 'react';
import { useParams } from 'react-router-dom';
import usePerfumeDetail from '../../../hooks/usePerfumeDetail';

const AllPerfumeDetail = () => {
  const { perfumeId } = useParams();
  const [perfume] = usePerfumeDetail(perfumeId)
  console.log(perfume)
  return (
    <div>
      <h1>this is perfume Detail :{ perfume.name}</h1>
    </div>
  );
};

export default AllPerfumeDetail;