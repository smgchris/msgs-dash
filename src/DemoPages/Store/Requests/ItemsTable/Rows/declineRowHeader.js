import React from 'react';
import { Table, Button } from 'reactstrap';

export default class declineRowHeader extends React.Component {
  render() {
    return (
     
      <thead>
      <tr>
        <th>#</th>
        <th>Item</th>
        <th>Qty</th>
        <th>Unit</th>
        <th>Value</th>
        <th>Requested By</th>
        <th>Request Reason</th>
        <th>Department</th>
        <th>Date of Request</th>
        <th>Reason for Decline</th>
        <th>Action</th>
      </tr>
    </thead>
         
    );
  }
}
