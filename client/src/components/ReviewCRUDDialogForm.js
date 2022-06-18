import { React, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';

function ReviewCRUDDialogForm({ review, onEditedReview }) {
  const [open, setOpen] = useState(false);
  const [updatedReview, setUpdatedReview] = useState("")

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e){
    e.preventDefault()
    console.log(updatedReview)
  }
  //   const updatedReviewObject = {
  //     review: updatedReview
  //   }

  //   fetch(`/reviews/${review.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(updatedReviewObject)
  //   })
  //     .then((res) => res.json())
  //     .then((editedReview) => onEditedReview(editedReview))
  // };

  function handleChange(e) {
    setUpdatedReview(e.target.value)
  }
  
  return (
    <div>
      <EditIcon onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit your review</DialogTitle>
          <DialogContent>
          <form onSubmit={handleSubmit} id="reviewForm">
            <TextField
              value={updatedReview} 
              onChange={handleChange}
              autoFocus
              margin="dense"
              placeholder={review.review}
              id="Review"
              label="Review"
              type="text"
              fullWidth
              name='review'
              variant="standard"
            />
          </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              type='submit' 
              onClick={handleClose} 
              form="reviewForm"
              >
                Submit
            </Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}

export default ReviewCRUDDialogForm