import React from 'react';
import { Table, Button } from 'reactstrap';
import { deleteProduct } from '../../../../actions/productActions';
import { connect } from 'react-redux';
import { date } from 'faker';
import {
  Row, Col, Card, CardBody, CardTitle,
  CustomInput, Form, FormGroup, Label
} from 'reactstrap';

class BuffetRow extends React.Component {
  onDelete(id) {
    this.props.deleteProduct(id)
  }
  onupdate(){
    location.assign(`#/kitchen/add-new-request`)
  }
  render() {
    const { item,index } = this.props;
    return (
      <tr>
        <th scope="row">{index+1}</th>
    <td>--{}</td> {/*item.product_name*/}
        <td>--{}</td>
        <td>--{}</td>
        <td>--{}</td>
        <td>--{}</td> 
    <td>--{}</td> {/*item.created_date*/}
        {/* <td>
          <Button outline className="mb-2 mr-2 btn-transition"
            color="primary" onClick={() => this.onDelete(user.user_id)}>Delete</Button>
          <Button outline className="mb-2 mr-2 btn-transition"
            color="primary" onClick={() => this.onUpdate(user.user_id)}>update</Button>
        </td> */}

        {/* new Date().toLocaleString(); toISOString*/}

      </tr>

    );
  }
}



export default connect(null, { deleteProduct })(BuffetRow);

