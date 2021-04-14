import React from 'react';
import { Table, Button } from 'reactstrap';
import DepartmentRow from '../Rows/DepartmentRow'
import DepartmentRowHeader from '../Rows/DepartmentRowHeader'

import { connect} from 'react-redux';
import {fetchDepts} from '../../../../actions/deptActions';
import {PropTypes} from 'prop-types'

class DepartmentsTableBordered extends React.Component {

  componentDidMount() {
    this.props.fetchDepts();
  }

  render() {
    return (
      <Table className="mb-0" bordered>
        <DepartmentRowHeader />
        <tbody>
          {
            this.props.depts.map((department,index) => (

              <DepartmentRow dept={department} index={index}/>

            ))
          }

        </tbody>
      </Table>
    );
  }
}
PropTypes.propTypes ={
  fetchDepts:PropTypes.func.isRequired,
  depts:PropTypes.array.isRequired,
  newDept:PropTypes.object
}

const mapStateToProps= state =>({
  depts:state.depts.items,
  newDept:state.depts.item
})
export default connect(mapStateToProps,{fetchDepts})(DepartmentsTableBordered);