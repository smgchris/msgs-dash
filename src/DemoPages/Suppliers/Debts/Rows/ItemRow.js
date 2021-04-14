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

console.log("unit "+item.product.unit);
    return (

      <tr>
        <th scope="row">{index}</th>
        <td>{item.created_date}</td>
        <td>{item.product.product_name }</td>
        <td>{item.entryQuantity}{' '}{item.product.unit}</td>
        <td>{item.unit_price}</td>
        <td>{parseInt(item.unit_price)*parseInt(item.entryQuantity)}{' Rwf'}</td>
      </tr>



    );
  }
}



export default connect(null, null)(ItemRow);