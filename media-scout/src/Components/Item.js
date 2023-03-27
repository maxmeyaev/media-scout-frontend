/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const CardStyle = {
  padding: '10px 10px',
  height: '100vh'
};

function Item ({ item }) {
  return (
    <Card style={CardStyle}>
      <>
        <div>
          <img src={item.image} alt={item.title} style={{ width: '20vw', height: '20wh' }}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StarHalfIcon />
          <h4> {item.rating} </h4>
          <h2 style={{ paddingLeft: '1em' }}>{item.title}</h2>
        </div>
      </>
    </Card>
  );
}
export default Item;
