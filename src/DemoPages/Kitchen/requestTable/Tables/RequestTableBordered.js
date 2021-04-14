import React from 'react';
import { Table, Button } from 'reactstrap';
import KitchenRequestRow from '../Rows/requestRow';
import RequestRowHeader from '../Rows/RequestRowHeader';


import { connect} from 'react-redux';
import {fetchRequests} from '../../../../actions/kitchenActions';
import {PropTypes} from 'prop-types'

 class requestsTableBordered extends React.Component {

  componentDidMount() {
    
    fetchRequests
    
  }
  render() {
    console.log(this.props.kitchen)
    const productrequests= this.props.kitchen.map((request,index) => (
      <KitchenRequestRow key={request.stocklog_id} request={request} index={index}/>
    ))
    console.log(productrequests);
    return (
      <Table className="mb-0" bordered >
        <RequestRowHeader />
        <tbody >
          {productrequests}
        </tbody>
      </Table>
    );
  }
}

PropTypes.propTypes ={
  fetchRequests: PropTypes.func.isRequired,
  kitchen : PropTypes.array.isRequired,
  newRequest :PropTypes.object,
}

const mapStateToProps= state =>({
  kitchen :state.kitchen.requests || [],
  newRequest:state.kitchen.item
})

const mapDispatchToProps= dispatch =>({
  fetchRequests :dispatch(fetchRequests())
})
                                                       

export default connect(mapStateToProps,mapDispatchToProps)(requestsTableBordered);
