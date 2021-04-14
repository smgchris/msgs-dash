import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatusStockLog, updateApproving } from '../../../../../actions/stockLogActions';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';
import { PropTypes } from 'prop-types'


class ItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decline_reason: "",
      modifier: '1',
      modal: false,
      approving: this.props.approving ? true : false,
      declining: this.props.declining ? true : false
    };

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault()

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
      modifier: this.state.modifier
    }

    this.props.updateStatusStockLog(stock_log)


    if (status === 4) {
      this.props.updateApproving(4)
      this.setState({
        approving: !this.state.approving
      })
    }
    if (status === 5) {
      this.props.updateApproving(5)
      this.setState({
        declining: !this.state.declining
      })
    }

  }

  onToggle() {
    this.setState({
      modal: !this.state.modal
    })
  }
  componentDidMount() {

  }
  render() {
    const { request, index } = this.props;
    const { modal, decline_reason } = this.state;

    // if(this.props.approving===false){
    //   this.setState({
    //     approving: false
    //   })
    // }


    return (
      <Fragment>
        <tr>
          <td>{index + 1}</td>
          <td>{request.product.product_name}</td>
          <td>{request.quantity}{' '}{request.stock_product.unit}</td>
          <td>{parseInt(request.stock_product.unit_price) * parseInt(request.quantity)}</td>
          <td>{request.user.names}</td>
          <td>{request.comment}</td>
          <td>{request.department.department_name}</td>
          <td>{request.log_date}</td>
          <td>{request.due_date}</td>
          <td>{this.state.approving === false && this.state.declining === false ?
            <Button outline className="mb-2 mr-2 btn-transition" color="primary"
              onClick={() => this.onUpdateStatus(4)}>Approve</Button> : <div></div>}
            {this.state.approving === true && this.props.approving === true ?
              <Button variant="primary" disabled> Approving...</Button> : <div></div>}
            {this.state.declining === true && this.props.declining === true ?
              <Button variant="primary" disabled> Declining...</Button> : <div></div>}
            {(this.state.approving === true) && this.props.approving === false ?
              <Button variant="primary" disabled> Approved</Button> : <div></div>}
            {(this.state.declining === true) && this.props.declining === false ?
              <Button variant="primary" disabled> Declined</Button> : <div></div>}
            {this.state.declining === false && this.state.approving === false ? <Button outline className="mb-2 mr-2 btn-transition"
              color="primary" onClick={() => this.onToggle()}>Decline</Button> : <div></div>}
          </td>
        </tr>

        <Modal isOpen={modal} toggle={() => this.onToggle()} className="">
          <ModalHeader toggle={() => this.onToggle()}>Reason for Request Decline</ModalHeader>
          <ModalBody>
            <textarea onChange={this.onChange} name="decline_reason" rows="4" cols="50" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => { this.onUpdateStatus(5); this.onToggle() }}>Decline Request</Button>{' '}
            <Button color="secondary" onClick={() => this.onToggle()}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  approving: state.stockLog.approving,
})

export default connect(mapStateToProps, { updateStatusStockLog, updateApproving })(ItemRow);