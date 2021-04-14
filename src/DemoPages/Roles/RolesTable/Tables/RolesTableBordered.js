import React from 'react';
import { Table, Button } from 'reactstrap';
import RoleRow from '../Rows/RoleRow'
import RoleRowHeader from '../Rows/RoleRowHeader'

import { connect} from 'react-redux';
import {fetchRoles} from '../../../../actions/roleActions';
import {PropTypes} from 'prop-types'

class RolesTableBordered extends React.Component {

  componentDidMount() {
    this.props.fetchRoles();
  }


  render() {
    return (
      <Table className="mb-0" bordered>
        <RoleRowHeader />
        <tbody>
          {
            this.props.roles.map((role) => (

              <RoleRow  role={role} />

            ))
          }

        </tbody>
      </Table>
    );
  }
}

PropTypes.propTypes ={
  fetchRoles:PropTypes.func.isRequired,
  roles:PropTypes.array.isRequired,
  newRole:PropTypes.object
}

const mapStateToProps= state =>({
  roles:state.roles.items,
  newRole:state.roles.item
})
export default connect(mapStateToProps,{fetchRoles})(RolesTableBordered);
