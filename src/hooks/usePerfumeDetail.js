import { useEffect, useState } from "react";

const usePerfumeDetail = (perfumeId) => {
  const [perfume, setPerfume] = useState({});
  useEffect(() => {
    const url = `https://peaceful-crag-68907.herokuapp.com/perfume/${perfumeId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPerfume(data));
  }, [perfumeId]);

  return [perfume];
};
export default usePerfumeDetail;
