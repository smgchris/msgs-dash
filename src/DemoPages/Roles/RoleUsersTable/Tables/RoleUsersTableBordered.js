import React from 'react';
import { Table, Button } from 'reactstrap';
import RoleUserRow from '../Rows/RoleUserRow'
import RoleUserRowHeader from '../Rows/RoleUserRowHeader'

import { connect} from 'react-redux';
import {fetchRoleUsers} from '../../../../actions/roleActions';
import {PropTypes} from 'prop-types'

class RoleUsersTable extends React.Component {

  componentDidMount() {
    this.props.fetchRoleUsers(this.props.role_id);
  }


  render() {
    return (
      <Table className="mb-0" bordered>
        <RoleUserRowHeader />
        <tbody>
          {
            this.props.roleUsers.map((roleUser,index) => (

              <RoleUserRow  roleUser={roleUser} index={index} />

            ))
          }

        </tbody>
      </Table>
    );
  }
}


const mapStateToProps= state =>({
  roleUsers:state.roles.roleUsers,
})

export default connect(mapStateToProps,{fetchRoleUsers})(RoleUsersTable);
