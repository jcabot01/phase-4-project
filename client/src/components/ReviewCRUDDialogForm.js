import { React, useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box }from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ReviewCRUDDialogForm({ review, onEditedReview, onDeleteClick }) {
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
  
    const updatedReviewObject = {
      review: updatedReview
    }

    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedReviewObject)
    })
      .then((res) => res.json())
      .then((editedReview) => onEditedReview(editedReview))
  };

  function handleChange(e) {
    setUpdatedReview(e.target.value)
  }

  function handleDelete(){
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    })
    onDeleteClick(review.id)
  };
  
  return (
    <Box display={'flex'} >
      <Box>
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
      </Box>
        <Box>
          <DeleteIcon onClick={handleDelete}/>
        </Box>
    </Box>
  );
}

export default ReviewCRUDDialogForm