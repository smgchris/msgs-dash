import React from 'react';
import { Table, Button } from 'reactstrap';
import UserRow from '../Rows/UserRow'
import UserRowHeader from '../Rows/UserRowHeader'

export default class UsersTableBordered extends React.Component {
  render() {
    return (
      <Table className="mb-0" bordered>
        <UserRowHeader />
        <tbody>
          {
            this.props.users.map((user) => (

              <UserRow delUser={this.props.delUser} user={user} />

            ))
          }

        </tbody>
      </Table>
    );
  }
}
