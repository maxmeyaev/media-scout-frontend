/* eslint-disable react/prop-types */
import React from 'react';
import { Paper } from '@mui/material';

function Item ({ item }) {
  return (
    <Paper>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} style={{ width: '20vw', height: '20wh' }}/>
      <h4> {item.rating} </h4>
    </Paper>
  );
}
export default Item;
