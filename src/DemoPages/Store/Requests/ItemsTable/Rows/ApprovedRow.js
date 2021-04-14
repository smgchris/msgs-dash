import React,{Fragment} from 'react';
import {updateStatusStockLog} from '../../../../../actions/stockLogActions';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class ItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decline_reason: "",
      modal:false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault()

  }
  onDelete(id){
  }
  onDecline() {
    this.setState({
      showDialog: !this.state.showDialog
    })
  }
  onUpdateStatus(status) {

    const stock_log = {
      id: this.props.request.stocklog_id,
      status: status,
      decline_reason: this.state.decline_reason,
    }

    this.props.updateStatusStockLog(stock_log)

    this.onToggle()
  }

  onToggle()
  {
    this.setState({
      modal: !this.state.modal
    })
  }
  render() {
    const {request,index}=this.props;
    const {modal, decline_reason } = this.state;
    return (
      <Fragment>
          <tr>
            <td>{index+1}</td>
            <td>{request.product.product_name}</td>
            <td>{request.quantity}{' '}{request.stock_product.unit}</td>
            <td>{parseInt(request.stock_product.unit_price)*parseInt(request.quantity)}</td> 
            <td>{request.user.names}</td>
            <td>{request.comment}</td>
            <td>{request.department.department_name}</td>
            <td>{request.log_date}</td>
            <td>
            </td>
        </tr>

        <Modal isOpen={modal} toggle={()=>this.onToggle()} className="">
          <ModalHeader toggle={()=>this.onToggle()}>Reason for Request Decline</ModalHeader>
          <ModalBody>
            <textarea onChange={this.onChange} name="decline_reason" rows="4" cols="50"/>
        </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.onUpdateStatus(5)}>Decline Request</Button>{' '}
            <Button color="secondary" onClick={()=>this.onToggle()}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </Fragment>     
    );
  }
}



export default connect(null, {updateStatusStockLog})(ItemRow);