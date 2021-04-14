import React from 'react';
import { Table, Button } from 'reactstrap';

export default class SupplierRow extends React.Component {
  render() {
    const {id,name,phone,email,address,paymentMode,dateAdded}=this.props.supplier;
    return (
     
          <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{paymentMode}</td>
            <td>{dateAdded}</td>
            <td><Button outline className="mb-2 mr-2 btn-transition"
                                            color="primary" onClick={this.props.delSupplier.bind(this,id)}>Delete</Button></td>
          </tr>
         
    );
  }
}
