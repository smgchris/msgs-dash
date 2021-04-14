import React from 'react';
import { Table, Button } from 'reactstrap';
import { deleteProduct } from '../../../../actions/productActions';
import { connect } from 'react-redux';
import { date } from 'faker';


class RequestRow extends React.Component {
  onDelete(id) {
    this.props.deleteProduct(id)
  }
  onupdate() {
    location.assign(`#/kitchen/add-new-request`)
  }
  render() {
    
    const { request, index } = this.props;
    // console.log(request.waiter.names);
    // if (!request.product) {
    //   return <div />
    // }

    return (
      <tr>
        <th scope="row">{index +1 }</th>
        <td>{request.waiter.names}</td>
        <td>{request.table_no}</td>
        <td>{request.menu.menu_name}</td>
        <td>{request.quantity}</td>
        <td>{request.quantity * request.menu.price}&nbsp;RwFF</td>
        <td>{request.order_time}</td>
        <td>{(request.status === "3") ? <div className="badge badge-warning">cancelled</div> : <div></div>}
          {(request.status === "2") ? <div className="badge badge-success">Paid</div> : <div></div>}
          {(request.status === "1") ? <div className="badge badge-danger">Not Paid</div> : <div></div>}</td>               
      </tr >

    );
  }
}



export default connect(null, { deleteProduct })(RequestRow);