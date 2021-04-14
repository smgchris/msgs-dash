import React from 'react';
import { Table, Button } from 'reactstrap';
// import {deleteProdCateg} from '../../../../actions/productCategActions';
import { connect } from 'react-redux';


class ItemRow extends React.Component {
  onDelete(id) {
    // this.props.deleteProdCateg(id)
  }

  onUpdate(id){
    location.assign("#/store/stock/update-stock-product/"+id)
  }
  render() {

    const {item,index} = this.props;

    return (

      <tr>
        <th scope="row">{index+1}</th>
        <td>{item.product.product_name }</td>
        <td>{item.entryQuantity}{' '}{item.product.unit}</td>
        <td>{item.unit_price}</td>
        <td>{parseInt(item.unit_price)*parseInt(item.entryQuantity)}</td>
        <td>{item.expiration_date}</td>
        <td>{item.created_date}</td>
        <td>{item.supplier.supplier_name}</td>
    <td>{item.paid==0?<div className="badge badge-warning">Not paid</div>:<div></div>}{' '}
    {item.paid==0?<Button outline className="mb-2 mr-2 btn-transition" color="primary" onClick={() => this.onUpdate(item.stock_product_id)}>Update</Button>:
        <div className="badge badge-success">Paid</div>}</td>
      </tr>



    );
  }
}



export default connect(null, null)(ItemRow);