import React from 'react';
import { Table, Button } from 'reactstrap';
import OrderRow from '../Rows/FrontEndRow';
import OrderRowHeader from '../Rows/rowHeader';


import { connect} from 'react-redux';
import { fetchorders} from '../../../../actions/kitchenActions';
import {PropTypes} from 'prop-types'

 class OrdersTableBordered extends React.Component {

  componentDidMount() {
    
    fetchorders
    
  }

  
  render() {
    
    console.log(this.props.kitchen)
    const productItems= this.props.kitchen.map((request,index) => (
      <OrderRow key={request.order_id} request={request} index={index}/>
    ))
    return (
      <Table className="mb-0" bordered>
        <OrderRowHeader />
        {/* <OrderRow /> */}
        <tbody>
         {productItems}
        </tbody>
      </Table>
    );
  }
}

PropTypes.propTypes ={
  fetchorders:PropTypes.func.isRequired,
  items:PropTypes.array.isRequired,
  // newItem:PropTypes.object,
}

const mapStateToProps= state =>({
  kitchen:state.kitchen.items || [],
  // newItem:state.products.item
})

const mapDispatchToProps= dispatch =>({
  fetchorders:dispatch(fetchorders())
})
                                                       

export default connect(mapStateToProps,mapDispatchToProps)(OrdersTableBordered);
