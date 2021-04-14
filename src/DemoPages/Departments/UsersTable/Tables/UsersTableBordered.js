import React from 'react';
import { Table, Button } from 'reactstrap';
import UserRow from '../Rows/UserRow'
import UserRowHeader from '../Rows/UserRowHeader'

import { connect } from 'react-redux';
import { fetchUsers } from '../../../../actions/userActions';
import {fetchDeptUsers} from '../../../../actions/deptActions';
import { PropTypes } from 'prop-types'
import { Fragment } from 'react';

class UsersTableBordered extends React.Component {

  componentDidMount() {
    const {fetchUsers, fetchDeptUsers}=this.props
    fetchUsers()
    fetchDeptUsers()

  }

  render() {
 
    // const userItems = this.props.users.map((user,index) => {
      
    //   const userItems2=this.props.deptUsers.map((deptUser)=>{
    //     if((deptUser.user_id===user.user_id&&deptUser.deptartment_id===this.props.dept_id))
    //       return <UserRow key={user.user_id} user={user} index={index} />
    //   })
    //   console.log(userItems2);
    //   return userItems2
    //   })
    console.log("logging");
    console.log(this.props.dept_id);
      console.log(this.props.deptUsers.filter(deptUser=>deptUser.department_id===this.props.dept_id));
     // const userItems = this.props.users.filter((user)=>user.user_id===this.props.deptUsers.filter(deptUser=>deptUser.deptartment_user===this.props.dept_id)))

    return (
      <Fragment>
        
        <Table className="mb-0" bordered>
          <UserRowHeader />
          <tbody>
            {/* {userItems} */}
          </tbody>
        </Table>
      </Fragment>

    );
  }
}

PropTypes.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  newUser: PropTypes.object,
}

const mapStateToProps = state => ({
  users: state.users.items,
  newUser: state.users.item,
  deptUsers:state.depts.deptUsers,
})




export default connect(mapStateToProps, {fetchDeptUsers,fetchUsers})(UsersTableBordered);