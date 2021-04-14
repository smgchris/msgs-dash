import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../../actions/productActions';
import { fetchSuppliers } from '../../../../actions/supplierActions';
import { fetchUsers } from '../../../../actions/userActions';
import { createStockProduct, fetchStockProducts } from '../../../../actions/stockProductActions';

class UpdateItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      unit: '',
      unit_price: '',
      supplier: '',
      quantity: ''

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const stockProduct = {
      product_id: this.state.name,
      unit: this.state.unit,
      unit_price: this.state.unit_price,
      supplier_id: this.state.supplier,
      quantity: this.state.quantity

    }

    this.props.createStockProduct(stockProduct);
  }
  componentDidMount() {
    fetchProducts
    fetchSuppliers
    fetchStockProducts
  }
  
  
  render() {
  console.log(this.props.stockProducts)
  const stockProduct=this.props.stockProducts.find(item=>item.stock_product_id===this.props.item_id)

    return (

      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}>
          <div>

            <Form onSubmit={this.onSubmit}>
              <Row>
                <Col lg='6'>

                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" readOnly bsSize="sm" name="name" value={stockProduct.product.product_name}>
                      
                    </Input>

                  </FormGroup>

                  <FormGroup>
                    <Label for="unit">Unit of Measurement</Label>
                    <Input type="text" name="unit" onChange={this.onChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="unit_price">Unit Price</Label>
                    <Input type="number" name="unit_price" onChange={this.onChange} value={stockProduct.unit_price}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="unit_price">Quantity</Label>
                    <Input type="number" name="quantity" onChange={this.onChange} />
                  </FormGroup>

                  <FormGroup>
                    <Label for="supplier">Supplier</Label>
                    <Input type="select" bsSize="sm" name="supplier" onChange={this.onChange} value={this.state.value}>
                      {
                        this.props.suppliers.map((supplier) => (

                          <option value={supplier.supplier_id}>{supplier.supplier_name}</option>

                        ))
                      }
                    </Input>

                  </FormGroup>


                </Col>
              </Row>
              <Row>
                <Col lg='6'>
                  <FormGroup>
                    <Button>Submit</Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>

    );
  }
}

const mapStateToProps= state =>({
  products:state.products.items || [],
  suppliers:state.suppliers.items || [],
  stockProducts:state.stockProducts.items || []
})

export default connect(mapStateToProps, { fetchProducts, fetchSuppliers, createStockProduct,fetchStockProducts })(UpdateItemForm);