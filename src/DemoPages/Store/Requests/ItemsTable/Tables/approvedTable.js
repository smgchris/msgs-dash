import React from 'react';
import { Table, Button } from 'reactstrap';
import ItemRow from '../Rows/ApprovedRow'
import ItemRowHeader from '../Rows/ItemRowHeader'

import { connect} from 'react-redux';
import {fetchStockLogs} from '../../../../../actions/stockLogActions';
import {PropTypes} from 'prop-types'

 class ApprovedTable extends React.Component {

  componentDidMount() {
    
   this.props.fetchStockLogs()
    
  }


  render() {
    const requestItems= this.props.approvedRequests.map((request,index) => (
      <ItemRow key={request.request_id} request={request} index={index} />
    ))
    return (
      <Table className="mb-0" bordered>
        <ItemRowHeader />
        <tbody>
          {requestItems}
        </tbody>
      </Table>
    );
  }
}

PropTypes.propTypes ={
  fetchRequests:PropTypes.func.isRequired,
  requests:PropTypes.array.isRequired,
  newRequest:PropTypes.object,
}

const mapStateToProps= state =>({
  approvedRequests:state.stockLog.approved || [],
  //approvedRequests:state.stockLog.filter(item => item.status === "4"),
})

const mapDispatchToProps= dispatch =>({
  fetchStockLogs:dispatch(fetchStockLogs())
})
                                                       
export default connect(mapStateToProps,{fetchStockLogs})(ApprovedTable);