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
    window.location.assign(`#/kitchen/add-new-request`)
  }
  render() {
    const { request, index } = this.props;
    if (!request.product) {
      return <div />
    }

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{request.product.product_name}</td>
        <td>{request.quantity}&nbsp;{request.stock_product.unit}</td>
        <td>{request.quantity * request.stock_product.unit_price}&nbsp;RwF</td>
        <td>{request.product.category_name}</td>
        <td>{request.stock_product.expiration_date}</td>

      </tr>

    );
  }
}



export default connect(null, { deleteProduct })(RequestRow);