import React from 'react';
import { Table, Button } from 'reactstrap';
import ItemRow from '../Rows/ItemRowEntry'
import ItemRowHeader from '../Rows/ItemRowHeaderEntry'
import { connect} from 'react-redux';
import {PropTypes} from 'prop-types'
import { fetchStockProducts } from '../../../../../actions/stockProductActions';
import { fetchSuppliers} from '../../../../../actions/supplierActions';
import { fetchProducts} from '../../../../../actions/productActions';


 class ItemsTableBordered extends React.Component {

  componentDidMount() {
    
    fetchStockProducts
    
  }

  render() {

    const stockProductItems= this.props.items.map((item,index) => (
      <ItemRow key={item.stock_product_id} item={item} index={index}/>
    ))
    return (
      <Table className="mb-0" bordered>
        <ItemRowHeader />
        <tbody>
          {stockProductItems}
        </tbody>
      </Table>
    );
  }
}

PropTypes.propTypes ={
  fetchStockProducts:PropTypes.func.isRequired,
  items:PropTypes.array.isRequired,
  newItem:PropTypes.object,
}

const mapStateToProps= state =>({
  items:state.stockProducts.items || [],
})

const mapDispatchToProps= dispatch =>({
  fetchStockProducts:dispatch(fetchStockProducts()),
})
                                                       
export default connect(mapStateToProps,mapDispatchToProps)(ItemsTableBordered);