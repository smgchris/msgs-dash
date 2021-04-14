import React from 'react';
import { Table, Button } from 'reactstrap';
import {deleteDept} from '../../../../actions/deptActions';
import { connect } from 'react-redux';

class DepartmentRow extends React.Component {
  onUpdate(id){
    window.location.assign("#/departments/update-department/"+id)
 }
 viewUsers(id,name){
    
  window.location.assign('#/departments/view-department-users/'+id+'/'+name)
}
  render() {
    const {dept,index}=this.props;
    return (
     
          <tr>
            <th scope="row">{index+1}</th>
            <td>{dept.department_name}</td>
            <td><Button outline className="mb-2 mr-2 btn-transition"
                                            color="primary" onClick={()=>this.onUpdate(dept.department_id)}>Update</Button>&nbsp;
                                            <Button outline className="mb-2 mr-2 btn-transition" onClick={()=>this.viewUsers(dept.department_id,dept.department_name)} color="primary" >View People</Button></td>
          </tr>
         
    );
  }
}

export default connect(null, {deleteDept})(DepartmentRow);