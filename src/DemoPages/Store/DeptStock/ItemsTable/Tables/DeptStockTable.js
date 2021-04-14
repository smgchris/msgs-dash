import React from 'react';
import { Table, Button } from 'reactstrap';
import ItemRow from '../Rows/DeptStockRow'
import ItemRowHeader from '../Rows/ItemRowHeader'

import { connect} from 'react-redux';
import {fetchStockLogs} from '../../../../../actions/stockLogActions';
import {PropTypes} from 'prop-types'

 class DeptStockTable extends React.Component {

  componentDidMount() {
    
   //this.props.fetchStockLogs()
    
  }


  render() {
    const requestItems= this.props.deptStockLog.map((request,index) => (
      <ItemRow key={request.request_id} request={request} index={index} />
    ))

    var total=0;
    const stockProducts= this.props.deptStockLog.map((item) => {
      
    
        total+=parseInt(item.stock_product.unit_price)*parseInt(item.quantity)
      
    })

    return (
      <Table className="mb-0" bordered>
        <ItemRowHeader />
        <tbody>
          {requestItems}
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Total</th>
            <th>{'Rwf '}{total}</th>
          </tr>
        </tbody>
      </Table>
    );
  }
}


                                                       
export default DeptStockTable;