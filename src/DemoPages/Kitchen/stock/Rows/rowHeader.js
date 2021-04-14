import React from 'react';
import { Table, Button } from 'reactstrap';

export default class StockRowHeader extends React.Component {
  render() {
    return (
     
      <thead>
      <tr>
        <th>#</th>
        <th>Product</th>
        {/* <th>Unit</th> */}
        <th>Quantity</th>
        <th>value</th>
        <th>Category</th>
        <th>Expiration Date</th>
      </tr>
    </thead>
         
    );
  }
}
