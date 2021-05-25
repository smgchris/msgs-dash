import React, { Fragment } from 'react';
import {
  Row, Col,
  Card, CardBody,
  CardTitle, Input, FormGroup, Label, Button, Table
} from 'reactstrap';
import Message from '../../../templates/Message'
import ItemRowHeader from '../Rows/ItemRowHeaderEntry'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'
import { fetchStockProducts } from '../../../../../actions/stockProductActions';
import { fetchProducts } from '../../../../../actions/productActions';
import { fetchSuppliers } from '../../../../../actions/supplierActions';



class ItemsTableBordered extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      supplier: '',
      product: '',
      fromdate: '',
      todate: '',
      stockProducts: this.props.items,
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);


  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onClick(e) {


    if (this.state.supplier !== '' && this.state.todate !== '' && this.state.fromdate !== '' && this.state.product !== '')
      this.setState({
        stockProducts: this.props.items.filter(item => item.supplier.supplier_id === this.state.supplier
          && item.created_date >= this.state.fromdate && item.created_date <= this.state.todate + 1 && item.product.product_id === this.state.product)
      })
    else if (this.state.supplier !== '' && this.state.todate !== '' && this.state.fromdate !== '')
      this.setState({
        stockProducts: this.props.items.filter(item => item.supplier.supplier_id === this.state.supplier
          && item.created_date >= this.state.fromdate && item.created_date <= this.state.todate + 1)
      })
    else if (this.state.product !== '' && this.state.product !== '')
      this.setState({
        stockProducts: this.props.items.filter(item => item.product.product_id === this.state.product)
      })
    else if (this.state.product !== '' && this.state.todate !== '' && this.state.fromdate !== '')
      this.setState({
        stockProducts: this.props.items.filter(item => item.product.product_id === this.state.product
          && item.created_date >= this.state.fromdate && item.created_date <= this.state.todate + 1)
      })
    else if (this.state.supplier !== '')
      this.setState({
        stockProducts: this.props.items.filter(item => item.supplier.supplier_id === this.state.supplier)
      })
    else if (this.state.todate !== '' && this.state.fromdate !== '')
      this.setState({
        stockProducts: this.props.items.filter(item => item.created_date >= this.state.fromdate && item.created_date <= this.state.todate + 1)
      })
    else if (this.state.product !== '')
      this.setState({
        stockProducts: this.props.items.filter(item => item.product.product_id === this.state.product)
      })
    else {
      this.setState({
        stockProducts: this.props.items
      })
    }

  }
  componentDidMount() {

    const { fetchStockProducts, fetchSuppliers, fetchProducts } = this.props

    fetchStockProducts()
    fetchSuppliers()
    fetchProducts()

  }

  render() {

    const editableMessages = this.state.stockProducts.map((item, index) => (
      <Message key={item.stock_product_id} item={item} index={index} />
    ))
    return (
      <Fragment>
        
        <Row>
          {editableMessages}
        </Row>
        
      </Fragment>

    );
  }
}

PropTypes.propTypes = {
  fetchStockProducts: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  newItem: PropTypes.object,
}

const mapStateToProps = state => ({
  items: state.stockProducts.items || [],
  products: state.products.items || [],
  suppliers: state.suppliers.items || [],
})


export default connect(mapStateToProps, { fetchSuppliers, fetchStockProducts, fetchProducts })(ItemsTableBordered);