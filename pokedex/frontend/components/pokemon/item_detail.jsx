import React from 'react';

const ItemDetail = ({ item }) => (
  <li>{item ? item.name : ""}</li>
);

export default ItemDetail;
