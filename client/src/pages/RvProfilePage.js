import { React } from "react";
import { useParams } from "react-router-dom";
import RvProfileCard from "../components/RvProfileCard";
import { Box } from "@mui/material";

function RvProfilePage({ rvs, user, onReviewPost }) {
  const { name } = useParams();

//fetchfull card
  // const [rv, setRv] = useState([]);

  //useEffect wanted me to include [id] in the dependency array, or delete the array entirely.  I put id in and got rid of the error. 
  // useEffect(() => {
  //   fetch(`/rvs/${id}`).then((r) => {
  //     if (r.ok) {
  //       r.json().then((rv) => setRv(rv));
  //     }
  //     });
  //   }, [id]);
  // console.log(rvs)
 
  return (
    <>
    <Box display="flex">
      {rvs
        .filter((rv) => rv.name === name)
        .map((rv) => (
        <RvProfileCard user={user} rv={rv} onReviewPost={onReviewPost}/> 
      ))}
    </Box>
    </>
  )
}

export default RvProfilePage