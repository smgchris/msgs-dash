import React from 'react';
import { Table, Button } from 'reactstrap';
import {updateStatusStockLog,updateApproving} from '../../../../../actions/stockLogActions';
import { connect } from 'react-redux';


class ItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decline_reason: "",
      modal:false,
      modifier:1,
      approving: this.props.approving ? true : false,
      declining: this.props.declining ? true : false
    };


  }
  onUpdateStatus(status) {

    const stock_log = {
      id: this.props.request.stocklog_id,
      status: status,
      decline_reason: '',
      modifier: this.state.modifier
    }

    this.props.updateStatusStockLog(stock_log)


    if (status === 4) {
      this.props.updateApproving(4)
      this.setState({
        approving: !this.state.approving
      })
    }

  }

  componentDidMount
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
            <td>{this.state.approving === false ?
            <Button outline className="mb-2 mr-2 btn-transition" color="primary"
              onClick={() => this.onUpdateStatus(4)}>Approve</Button> : <div></div>}
            {this.state.approving === true && this.props.approving === true ?
              <Button variant="primary" disabled> Approving...</Button> : <div></div>}
            {(this.state.approving === true) && this.props.approving === false ?
              <Button variant="primary" disabled> Approved</Button> : <div></div>}
          </td>
          </tr>
         
    );
  }
}

const mapStateToProps = state => ({
  approving: state.stockLog.approving,
})

export default connect(mapStateToProps, { updateStatusStockLog, updateApproving })(ItemRow);