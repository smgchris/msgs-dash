import React from 'react';
import { Table, Button } from 'reactstrap';
import ItemRow from '../Rows/PendingRow'
import ItemRowHeader from '../Rows/pendingRowHeader'

import { connect} from 'react-redux';
import {PropTypes} from 'prop-types'
import { fetchStockLogs } from '../../../../../actions/stockLogActions';

 class PendingTable extends React.Component {

  componentDidMount() {
    
    this.props.fetchStockLogs()
    
  }


  render() {
    
    const requestItems= this.props.pendingRequests.map((request,index) => (
      <ItemRow key={request.request_id} request={request} index={index}/>
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
  pendingRequests:state.stockLog.pending || [],
  //pendingRequests:state.stockLog.filter(item => item.status === "3"),
})

const mapDispatchToProps= dispatch =>({
  fetchStockLogs:dispatch(fetchStockLogs())
})
                                                       

export default connect(mapStateToProps,{fetchStockLogs})(PendingTable);