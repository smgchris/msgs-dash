import React from 'react';
import { Table, Button } from 'reactstrap';
import ItemRow from '../Rows/kitchenStockRow';
import ItemRowHeader from '../Rows/rowHeader';


import { connect} from 'react-redux';
import { fetchRequests} from '../../../../actions/kitchenActions';
import {PropTypes} from 'prop-types'

 class StockTableBordered extends React.Component {

  componentDidMount() {
    
    fetchRequests
    
  }

  // componentDidUpdate(nextProps){
    
  //   if(nextProps.newItem){
  //     this.props.items.unshift(nextProps.newItem);
  //   }
  // }

  render() {
    
    console.log(this.props.kitchen)
    const productItems= this.props.kitchen.map((request,index) => (
      <ItemRow key={request.stocklog_id} request={request} index={index}/>
    ))
    return (
      <Table className="mb-0" bordered>
        <ItemRowHeader />
        <tbody>
          {productItems}
        </tbody>
      </Table>
    );
  }
}

PropTypes.propTypes ={
  fetchRequests:PropTypes.func.isRequired,
  items:PropTypes.array.isRequired,
  // newItem:PropTypes.object,
}

const mapStateToProps= state =>({
   kitchen:state.kitchen.approvedRequests || [],
  // kitchen:state.kitchen.requests || [],
  // newItem:state.products.item
})

const mapDispatchToProps= dispatch =>({
  fetchRequests:dispatch(fetchRequests())
})
                                                       

export default connect(mapStateToProps,mapDispatchToProps)(StockTableBordered);
