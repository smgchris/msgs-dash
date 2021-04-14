import React from 'react';
import { Table, Button } from 'reactstrap';

export default class UserRow extends React.Component {
  render() {
    return (
     
      <thead>
      <tr>
        <th>#</th>
        <th>Date of Request</th>
        <th>Item</th>
        <th>Requested By</th>
        <th>Comment</th>
        <th>Department</th>
        <th>Quantity</th>
        <th>Value</th>
      </tr>
    </thead>
         
    );
  }
}
