import React, { Component } from 'react'
import Header from './ProductSummaryHeader'
import ProductSummaryRow from './ProductSummaryRow'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import {PropTypes} from 'prop-types'
import {fetchProducts} from '../../../../actions/productActions';
import {fetchProductCategs} from '../../../../actions/categoryActions';

class ProductSummary extends Component {
    componentDidMount() {
    
        fetchProducts
        fetchProductCategs
        
      }
    
      componentDidUpdate(nextProps){
        
        if(nextProps.newItem){
          this.props.items.unshift(nextProps.newItem);
        }
      }

    render() {
        const productItems= this.props.items.map(item => (
            <ProductSummaryRow key={item.product_id} item={item} />
          ))
        return (
            <div>
                <Table className="mb-0" bordered >
                    <Header />
                    <tbody >
                                                {/* <ProductSummaryRow /> */}
                                                {productItems}
                    </tbody>
                </Table>
                <span>the hell is happening here</span>
            </div>
        )
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
    categories:state.prodCategories.items
  })
  const mapDispatchToProps= dispatch =>({
    fetchProducts:dispatch(fetchProducts()),
    fetchProductCategs:dispatch(fetchProductCategs())
  })

export default connect(mapStateToProps, mapDispatchToProps)(ProductSummary)