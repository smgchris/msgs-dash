import React from 'react';
import { Table, Button } from 'reactstrap';
import {updateStatusStockLog} from '../../../../../actions/stockLogActions';
import { connect } from 'react-redux';


class ItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decline_reason: "",
      modal:false
    };

  }
  onUpdateStatus(status){
    const stock_log = {
      id: this.props.request.stocklog_id,
      status: status,
      decline_reason:'',
    }

    this.props.updateStatusStockLog(stock_log)
  }
  render() {
    const {request,index}=this.props;
    return (
     
          <tr>
            <td>{index+1}</td>
            <td>{request.product.product_name}</td>
            <td>{request.quantity}</td>
            <td>{request.stock_product.unit}</td>
            <td>{parseInt(request.stock_product.unit_price)*parseInt(request.quantity)}</td> 
            <td>{request.user.names}</td>
            <td>{request.comment}</td>
            <td>{request.department.department_name}</td>
            <td>{request.log_date}</td>
            <td>{request.decline_reason}</td>
            <td><Button outline className="mb-2 mr-2 btn-transition"
                                            color="primary" onClick={()=>this.onUpdateStatus(4)}>Approve</Button></td>
          </tr>
         
    );
  }
}



export default connect(null, {updateStatusStockLog})(ItemRow);