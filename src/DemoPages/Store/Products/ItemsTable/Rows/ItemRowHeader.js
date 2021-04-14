import React from 'react';
import { Table, Button } from 'reactstrap';

export default class ItemRowHeader extends React.Component {
  render() {
    return (
     
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Unit of Measurement</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
         
    );
  }
}
