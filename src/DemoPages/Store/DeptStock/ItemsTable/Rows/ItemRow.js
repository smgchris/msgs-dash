import React from 'react';
import { Table, Button } from 'reactstrap';
import {deleteProduct} from '../../../../../actions/productActions';
import { connect } from 'react-redux';


class ItemRow extends React.Component {
  onUpdate(id){
     window.location.assign("#/store/products/update-product/"+id)
  }
  render() {
    const {item,index}=this.props;
    
    return (
     
          <tr>
            <th scope="row">{index+1}</th>
            <td>{item.product_name}</td>
            <td>{item.category.category_name}</td>
            <td><Button outline className="mb-2 mr-2 btn-transition"
                                            color="primary" onClick={()=>this.onUpdate(item.product_id)}>Update</Button></td>
          </tr>
         
    );
  }
}



export default connect(null, {deleteProduct})(ItemRow);