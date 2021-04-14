import React from 'react';
import { Table, Button } from 'reactstrap';

export default class RoleRow extends React.Component {
  render() {
    const {id,name}=this.props.role;
    return (
     
          <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td><Button outline className="mb-2 mr-2 btn-transition"
                                            color="primary" onClick={this.props.delRole.bind(this,id)}>Delete</Button></td>
          </tr>
         
    );
  }
}
