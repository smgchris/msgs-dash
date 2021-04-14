import React, {Fragment} from 'react';
import {
  Row, Col,
  Card, CardBody,
  CardTitle, Input, FormGroup, Label, Button,Table
} from 'reactstrap';
import ItemRow from '../Rows/ItemRowEntry'
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
        stockProducts: this.props.items.filter(item =>item.product.product_id === this.state.product
          && item.created_date >= this.state.fromdate && item.created_date <= this.state.todate + 1)
      })
    else if (this.state.supplier !== '')
      this.setState({
        stockProducts: this.props.items.filter(item =>item.supplier.supplier_id === this.state.supplier)
      })
    else if (this.state.todate !== '' && this.state.fromdate !== '')
      this.setState({
        stockProducts: this.props.items.filter(item => item.created_date >= this.state.fromdate && item.created_date <= this.state.todate + 1)
      })
    else if (this.state.product !== '')
      this.setState({
        stockProducts: this.props.items.filter(item =>item.product.product_id === this.state.product)
      })
    else{
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

    const stockProductItems = this.state.stockProducts.map((item, index) => (
      <ItemRow key={item.stock_product_id} item={item} index={index} />
    ))
    return (
      <Fragment>
        <Row>
          <Col lg="12">

            <div className="">
              <CardBody>
                <Row>
                  <Col lg='3'>
                    <FormGroup>
                      <Label>Supplier</Label>
                      <Input type="select" name="supplier" onChange={this.onChange} value={this.state.value} required>
                        <option value="">All</option>
                        {
                          this.props.suppliers.map((supplier) => (

                            <option value={supplier.supplier_id}>{supplier.supplier_name}</option>

                          ))
                        }
                      </Input>

                    </FormGroup>
                  </Col>
                  <Col lg='2'>
                    <FormGroup>
                      <Label>Product</Label>
                      <Input type="select" name="product" onChange={this.onChange} value={this.state.value} required>
                        <option value="">All</option>
                        {
                          this.props.products.map((product) => (

                            <option value={product.product_id}>{product.product_name}</option>

                          ))
                        }
                      </Input>

                    </FormGroup>

                  </Col>

                  <Col lg='3'>
                    <FormGroup>
                      <Label for="fromdate">From</Label>
                      <Input type="date" name="fromdate" onChange={this.onChange} required />
                    </FormGroup>

                  </Col>
                  <Col lg='3'>
                    <FormGroup>
                      <Label for="todate">To</Label>
                      <Input type="date" name="todate" onChange={this.onChange} min={this.state.fromdate} required />
                    </FormGroup>

                  </Col>
                  <Col lg='1'>
                    <FormGroup>
                    <br/>
                      <Button className="btn btn-info " onClick={this.onClick}>Filter</Button>
                    </FormGroup>

                  </Col>


                </Row>


              </CardBody>
            </div>
          </Col>

        </Row>
        <Table className="mb-0" bordered>
          <ItemRowHeader />

          <tbody>
            {stockProductItems}
          </tbody>
        </Table>
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
  suppliers:state.suppliers.items || [],
})


export default connect(mapStateToProps, {fetchSuppliers,fetchStockProducts,fetchProducts})(ItemsTableBordered);