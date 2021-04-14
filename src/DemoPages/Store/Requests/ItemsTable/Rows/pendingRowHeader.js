import React from 'react';
import { Table, Button } from 'reactstrap';

export default class UserRow extends React.Component {
  render() {
    return (
     
      <thead>
      <tr>
        <th>#</th>
        <th>Item</th>
        <th>Quantity</th>
        <th>Value</th>
        <th>Requested By</th>
        <th>Comment</th>
        <th>Department</th>
        <th>Date of Request</th>
        <th>Due date</th>
        <th>Action</th>
      </tr>
    </thead>
         
    );
  }
}
