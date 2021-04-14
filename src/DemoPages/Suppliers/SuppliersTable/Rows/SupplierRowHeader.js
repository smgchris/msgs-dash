import React from 'react';
import { Table, Button } from 'reactstrap';

export default class SupplierRow extends React.Component {
  render() {
    return (
     
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>address</th>
        <th>paymentMode</th>
        <th>Date Added</th>
        <th>Action</th>
      </tr>
    </thead>
         
    );
  }
}
