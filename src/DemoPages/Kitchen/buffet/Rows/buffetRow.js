import React from 'react';
import { Table, Button } from 'reactstrap';
import { deleteProduct } from '../../../../actions/productActions';
import { connect } from 'react-redux';

class BuffetRow extends React.Component {
  onDelete(id) {
    this.props.deleteProduct(id)
  }
  onupdate() {
    location.assign(`#/kitchen/add-new-request`)
  }
  render() {
    const { item, index } = this.props;
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{item.menu.menu_name}</td>
        <td>{item.quantity}</td>
        <td>{item.returned}</td>
        <td>{item.price}</td>
        <td> {item.order_time}</td>
        <td>{item.description}</td>
        <td>
          {/* <Button outline className="mb-2 mr-2 btn-transition"
            color="primary" onClick={() => this.onDelete(user.user_id)}>Delete</Button> */}
          <Button outline className="mb-2 mr-2 btn-transition"
            color="primary" onClick={() => this.onUpdate(user.user_id)}>update</Button>
        </td>

      </tr>

    );
  }
}



export default connect(null, { deleteProduct })(BuffetRow);

