import React from 'react';
import { Table, Button } from 'reactstrap';
import {deleteDept} from '../../../../actions/deptActions';
import { connect } from 'react-redux';

class DeptUserRow extends React.Component {

 onRemove(id){
 }
  render() {
    const {deptUser}=this.props;
    return (
     
          <tr>
            <th scope="row">{deptUser.department_id}</th>
            <td>{deptUser.user.names}</td>
            <td><Button outline className="mb-2 mr-2 btn-transition"
                                            color="primary" onClick={()=>this.onRemove(1)}>Remove</Button></td>
          </tr>
         
    );
  }
}

export default connect(null, {deleteDept})(DeptUserRow);