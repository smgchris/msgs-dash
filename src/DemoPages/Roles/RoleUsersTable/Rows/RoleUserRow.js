import React from 'react';
import { Table, Button } from 'reactstrap';

export default class RoleUserRow extends React.Component {
  render() {
    const {roleUser,index}=this.props;
    return (
     
          <tr>
            <th scope="row">{index+1}</th>
            <td>{roleUser.username}</td>
            <td>{roleUser.names}</td>
           
          </tr>
         
    );
  }
}
