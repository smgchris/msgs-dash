import React from 'react';
import { Table, Button } from 'reactstrap';
import ItemRow from '../Rows/ItemRow'
import ItemRowHeader from '../Rows/ItemRowHeader'

import { connect} from 'react-redux';
import {fetchProducts} from '../../../../../actions/productActions';
import {PropTypes} from 'prop-types'

 class ItemsTableBordered extends React.Component {

  componentDidMount() {
    const {fetchProducts} =this.props
    fetchProducts()
    
  }

  render() {
    
    const productItems= this.props.items.map((item,index) => (
      <ItemRow key={item.product_id} item={item}  index={index}/>
    ))
    return (
      <Table className="mb-0" bordered>
        <ItemRowHeader />
        <tbody>
          {productItems}
        </tbody>
      </Table>
    );
  }
}

PropTypes.propTypes ={
  fetchProducts:PropTypes.func.isRequired,
  items:PropTypes.array.isRequired,
  newItem:PropTypes.object,
}

const mapStateToProps= state =>({
  items:state.products.items || [],
  newItem:state.products.item,
})

const mapDispatchToProps= dispatch =>({
  fetchProducts:dispatch(fetchProducts()),
})
                                                       

export default connect(mapStateToProps,{fetchProducts})(ItemsTableBordered);