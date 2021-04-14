import React from 'react';
import { Table, Button } from 'reactstrap';
import DeptUserRow from '../Rows/DeptUserRow'
import DeptUserRowHeader from '../Rows/DeptUserRowHeader'

import { connect} from 'react-redux';
import {fetchDeptUsers} from '../../../../actions/deptActions';
import {PropTypes} from 'prop-types'

class DeptUsersTableBordered extends React.Component {

  componentDidMount() {
    this.props.fetchDeptUsers(this.props.dept_id);
  }


  render() {
    return (
      <Table className="mb-0" bordered>
        <DeptUserRowHeader />
        <tbody>
          {
            this.props.deptUsers.map((user) => (

              <DeptUserRow deptUser={user} />

            ))
          }

        </tbody>
      </Table>
    );
  }
}


const mapStateToProps= state =>({
  deptUsers:state.depts.deptUsers,
})
export default connect(mapStateToProps,{fetchDeptUsers})(DeptUsersTableBordered);