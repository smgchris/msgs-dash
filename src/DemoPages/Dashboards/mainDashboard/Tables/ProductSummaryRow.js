import React from 'react';
import { connect } from 'react-redux';


class ProductSummaryRow extends React.Component {
  
  render() {
    const {item}=this.props;

    if(!item.category){
        return <div/>
      }

    return (
       
       <tr>
       <th scope="row">{item.product_id}</th>
    <td>{item.product_name}</td>
       <td>{item.category.category_name}</td>
       <td>25&nbsp;RwF</td>
       <td>{item.category.category_name}</td>
       <td>25</td>
     </tr>
    );
  }
}



export default connect(null)(ProductSummaryRow);