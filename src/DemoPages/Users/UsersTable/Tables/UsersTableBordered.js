import React from 'react';
import { Table, Button } from 'reactstrap';
import UserRow from '../Rows/UserRow'
import UserRowHeader from '../Rows/UserRowHeader'

import { connect } from 'react-redux';
import { fetchUsers } from '../../../../actions/userActions';
import { PropTypes } from 'prop-types'
import { Fragment } from 'react';

class UsersTableBordered extends React.Component {

  componentDidMount() {

    this.props.fetchUsers()

  }

  render() {
    const userItems = this.props.users.map((user,index) => (
      <UserRow key={user.user_id} user={user} index={index} />
    ))
    return (
      <Fragment>
        
        <Table className="mb-0" bordered>
          <UserRowHeader />
          <tbody>
            {userItems}
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
  users: state.users.items || [],
  newUser: state.users.item
})




export default connect(mapStateToProps, {fetchUsers})(UsersTableBordered);