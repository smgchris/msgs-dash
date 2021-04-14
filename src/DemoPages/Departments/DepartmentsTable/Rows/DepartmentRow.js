import React from 'react';
import { Table, Button } from 'reactstrap';

export default class DepartmentRow extends React.Component {
  render() {
    const {id,name}=this.props.department;
    return (
     
          <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td><Button outline className="mb-2 mr-2 btn-transition"
                                            color="primary" onClick={this.props.delDepartment.bind(this,id)}>Delete</Button></td>
          </tr>
         
    );
  }
}
