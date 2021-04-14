import React from 'react';
import { Table, Button } from 'reactstrap';
import ItemRow from '../Rows/DeclinedRow'
import ItemRowHeader from '../Rows/declineRowHeader'

import { connect} from 'react-redux';
import {PropTypes} from 'prop-types'
import { fetchStockLogs } from '../../../../../actions/stockLogActions';

 class RejectedTable extends React.Component {

  componentDidMount() {
    
   //this.props.fetchStockLogs()
    
  }


  render() {
    console.log(this.props)
    const requestItems= this.props.declinedRequests.map((request,index) => (
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
  declinedRequests:state.stockLog.declined || [],
  //declinedRequests:state.stockLog.filter(item => item.status === "5"),
  //newRequest:state.requests.item
})

const mapDispatchToProps= dispatch =>({
  fetchStockLogs:dispatch(fetchStockLogs())
})
                                                       

export default connect(mapStateToProps,{fetchStockLogs})(RejectedTable);