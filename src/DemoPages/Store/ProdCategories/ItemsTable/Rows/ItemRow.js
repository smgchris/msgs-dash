import React from 'react';
import { Table, Button } from 'reactstrap';
import {deleteProductCateg} from '../../../../../actions/categoryActions';
import { connect } from 'react-redux';


class ItemRow extends React.Component {
  onDelete(id){
     this.props.deleteProductCateg(id)
  }
  onUpdate(id){
    window.location.assign("#/store/categories/update-product-category/"+id)
  }
  render() {
    const {item}=this.props;
    return (
     
          <tr>
            <th scope="row">{item.category_id}</th>
            <td>{item.category_name}</td>
            <td>
              <Button outline className="mb-2 mr-2 btn-transition" color="primary" onClick={()=>this.onUpdate(item.category_id)}>Update</Button>
            </td>
          </tr>
         
    );
  }
}



export default connect(null, {deleteProductCateg})(ItemRow);