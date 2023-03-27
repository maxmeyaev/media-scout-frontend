/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import dummy from '../helper/dummy.json';

function Example () {
  return (
    <Carousel>
      {
        dummy.map(item => <Item key={item.id} item={item} />)
      }
    </Carousel>
  );
}
export default Example;
