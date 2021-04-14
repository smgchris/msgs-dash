import React from 'react';
import { Table, Button } from 'reactstrap';

export default class RequestRowHeader extends React.Component {
  render() {
    return (
     
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Comment</th>
        <th>Due Date</th>
        <th>Made on</th>
        <th>Action</th>
      </tr>
    </thead>
         
    );
  }
}
