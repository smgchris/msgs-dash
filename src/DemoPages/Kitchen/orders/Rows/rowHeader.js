import React from 'react';
import { Table, Button } from 'reactstrap';

export default class StockRowHeader extends React.Component {
  render() {
    return (
     
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Table</th>
        <th>Order</th>
        <th>Amount</th>
        <th>Price</th>
        <th>Time</th>
        <th>status</th> {/* pending cancelled paid */}
      </tr>
    </thead>
         
    );
  }
}
