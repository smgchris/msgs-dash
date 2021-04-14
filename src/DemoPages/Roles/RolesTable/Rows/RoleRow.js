import React from 'react';
import { Table, Button } from 'reactstrap';

export default class RoleRow extends React.Component {
  viewUsers(id){
    
    location.assign('#/roles/view-role-users/'+id)
  }
  render() {
    const {role}=this.props;
    return (
     
          <tr>
            <th scope="row">{role.role_id}</th>
            <td>{role.role_name}</td>
            <td><Button outline className="mb-2 mr-2 btn-transition" onClick={()=>this.viewUsers(role.role_id)} color="primary" >View People</Button></td>
          </tr>
         
    );
  }
}
