import React from 'react';
import { Table, Button } from 'reactstrap';

export default class UserRow extends React.Component {
  render() {
    return (
     
      <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Address</th>
        <th>Department</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
         
    );
  }
}
