import React from 'react';
import { Table, Button } from 'reactstrap';
import DepartmentRow from '../Rows/DepartmentRow'
import DepartmentRowHeader from '../Rows/DepartmentRowHeader'

export default class DepartmentsTableBordered extends React.Component {
  render() {
    return (
      <Table className="mb-0" bordered>
        <DepartmentRowHeader />
        <tbody>
          {
            this.props.departments.map((department) => (

              <DepartmentRow delDepartment={this.props.delDepartment} department={department} />

            ))
          }

        </tbody>
      </Table>
    );
  }
}
