import { React } from "react";
import { useParams } from "react-router-dom";
import RvProfileCard from "../components/RvProfileCard";
import { Box } from "@mui/material";

function RvProfilePage({ rvs, user, onReviewPost }) {
  const { name } = useParams();
   
  return (
    <>
    <Box>
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