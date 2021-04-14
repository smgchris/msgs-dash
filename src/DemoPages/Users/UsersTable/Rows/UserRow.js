import React from 'react';
import { Table, Button } from 'reactstrap';
import {deleteUser} from '../../../../actions/userActions';
import { connect } from 'react-redux';


class UserRow extends React.Component {
  onDelete(id){
     this.props.deleteUser(id)
  }
  
  onUpdate(id){
    location.assign("#/users/update-user/"+id)
  }

  render() {
    const {user,index}=this.props;

    return (
     
          <tr>
            <th scope="row">{index+1}</th>
            <td>{user.username}</td>
            <td>{user.names}</td>
            <td>{user.role.role_name}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td><Button outline className="mb-2 mr-2 btn-transition" color="primary" onClick={()=>this.onUpdate(user.user_id)}>Update</Button>
                 </td>
          </tr>
         
    );
  }
}



export default connect(null, {deleteUser})(UserRow);