import React from 'react';
import { Table, Button } from 'reactstrap';
import RoleRow from '../Rows/RoleRow'
import RoleRowHeader from '../Rows/RoleRowHeader'

export default class RolesTableBordered extends React.Component {
  render() {
    return (
      <Table className="mb-0" bordered>
        <RoleRowHeader />
        <tbody>
          {
            this.props.roles.map((role) => (

              <RoleRow delRole={this.props.delRole} role={role} />

            ))
          }

        </tbody>
      </Table>
    );
  }
}
