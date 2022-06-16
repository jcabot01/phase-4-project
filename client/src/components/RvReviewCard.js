import React from 'react'

function RvReviewCard({ rv }) {

  //handle patch up here

  //handle deleteCallback here, send upstream via props to UserProfile

  //card contains rv: id info
  //card contains EITHER a review or a blank submission form
  //review contains state of description & edit button (dialog popup containing form), delete (onClick)
  return (
    <div>
      
      RvReviewCard
      {console.log(rv.reviews)}
      {console.log(rv.users)}
    </div>
  )
}
//this is exported to UserProfile
export default RvReviewCard