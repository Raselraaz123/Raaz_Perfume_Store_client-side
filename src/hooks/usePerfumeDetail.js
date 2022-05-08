import { useEffect, useState } from "react"

const usePerfumeDetail = perfumeId => {
  const [perfume, setPerfume] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/perfume/${perfumeId}`;
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPerfume(data));
  }, [perfumeId]);

  return [perfume];
}
export default usePerfumeDetail;