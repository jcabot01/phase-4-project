import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function RvProfilePage() {
  const { id } = useParams();

//fetchfull card
  const [rv, setRv] = useState([]);

  //useEffect wanted me to include [id] in the dependency array, or delete the array entirely.  I put id in and got rid of the error. 
  useEffect(() => {
    fetch(`/rvs/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((rv) => setRv(rv));
      }
      });
    }, [id]);


  return (
    <div>{console.log(rv)}</div>
  )
}

export default RvProfilePage