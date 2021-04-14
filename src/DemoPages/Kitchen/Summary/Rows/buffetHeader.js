import React from 'react';

export default class BuffetRowHeader extends React.Component {
  render() {
    return (
     
      <thead>
      <tr>
        <th>#</th>
        <th>Type</th>
        <th>Qty Received</th>
        <th>Qty Returned</th>
        <th>Qty Sold</th>
        <th>Date</th>
        <th>Description</th>
      </tr>
    </thead>
         
    );
  }
}
