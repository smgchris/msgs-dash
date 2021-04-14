import React from 'react';
import { Table, Button } from 'reactstrap';

export default class UserRow extends React.Component {
  render() {
    const {id,username,name,phone,email,address,department,role}=this.props.user;
    return (
     
          <tr>
            <th scope="row">{id}</th>
            <td>{username}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{department}</td>
            <td>{role}</td>
            <td><Button outline className="mb-2 mr-2 btn-transition"
                                            color="primary" onClick={this.props.delUser.bind(this,id)}>Delete</Button></td>
          </tr>
         
    );
  }
}
