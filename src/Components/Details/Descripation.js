import React, { useState } from "react";

import "./StyleDetailHeader.css";

import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

export default function ProductDescription({ product }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="product_description">
      <Typography variant="h5" component="h2">
        Description
      </Typography>
      <Typography
        className="description"
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {product.description}
      </Typography>
      <Typography style={{ marginTop: 20 }} variant="h5" component="h2">
        Reviews
      </Typography>

      <form className="form_review">
        <Typography style={{ marginBottom: 20 }} variant="h5" component="h2">
          Write your Review
        </Typography>
        <FormControl>
          <Select
            className="form_select"
            variant="outlined"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <MenuItem value={0}> Rate Product</MenuItem>
            <MenuItem value={1}> 1 - Poor </MenuItem>
            <MenuItem value={2}> 2 - Fair </MenuItem>
            <MenuItem value={3}> 3 - Good</MenuItem>
            <MenuItem value={4}> 4 - Very Good </MenuItem>
            <MenuItem value={5}> 5 - Excellent </MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Comment Product"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          variant="outlined"
        />
        {/* {!isAuthenticated && <Alert severity="info">You need to Login </Alert>} */}
        <button className="review_btn">Secondary</button>
      </form>
     
    </div>
  );
}
