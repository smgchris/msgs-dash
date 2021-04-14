import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button,
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../../actions/productActions';
import { fetchSuppliers } from '../../../../actions/supplierActions';
import { createStockProduct,updateStockProduct,addingItem } from '../../../../actions/stockProductActions';

class AddItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.item!==undefined?this.props.item.product.product_id:'',
      unit_price: this.props.item!==undefined?this.props.item.unit_price:'',
      supplier: this.props.item!==undefined?this.props.item.supplier.supplier_id:'',
      quantity: this.props.item!==undefined?this.props.item.quantity:'',
      expiration:this.props.item!==undefined?this.props.item.expirationDate:'',
      paid:this.props.item!==undefined?this.props.item.paid:'',
      creator:this.props.item!==undefined?this.props.item.created_by:'1',
      modifier:'1'

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const stockProduct = {
      product_id: this.state.name,
      unit_price: this.state.unit_price,
      supplier_id: this.state.supplier,
      qty: this.state.quantity,
      expiration:this.state.expiration,
      paid:this.state.paid,
      creator:this.state.creator
    }
    
    this.props.createStockProduct(stockProduct);
    this.props.addingItem()
  }

  onUpdate(e) {
    e.preventDefault();

    const stockProduct = {
      sp_id:this.props.item_id,
      product_id: this.state.name,
      unit_price: this.state.unit_price,
      supplier_id: this.state.supplier,
      qty: this.state.quantity,
      expiration:this.state.expiration,
      paid:this.state.paid,
      modifier:this.state.modifier

    }
  

    this.props.updateStockProduct(stockProduct);
    this.props.addingItem()
  }

  componentDidMount() {
    const {fetchProducts,fetchSuppliers}=this.props

    fetchProducts()
    fetchSuppliers()

    
  }
  render() {
    
    if(this.props.itemAdding==="added"){
      location.assign("#/store/stock/manage-stock")
    }

   if(!this.props.item)
   {
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
                    <Input type="select" bsSize="sm" name="name" onChange={this.onChange} value={this.state.value} required>
                      <option>{'Select'}</option>
                      {
                        this.props.products.map((product) => (

                        <option value={product.product_id}>{product.product_name} ({product.unit})</option>

                        ))
                      }
                    </Input>

                  </FormGroup>

                  
                  <FormGroup>
                    <Label for="unit_price">Unit Price</Label>
                    <Input type="number" name="unit_price" onChange={this.onChange} required/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="quantity">Quantity</Label>
                    <Input type="number" name="quantity" onChange={this.onChange} required/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="expiration">Expiration Date</Label>
                    <Input type="date" name="expiration" onChange={this.onChange} required/>
                  </FormGroup>

                  <FormGroup>
                    <Label for="supplier">Supplier</Label>
                    <Input type="select" bsSize="sm" name="supplier" onChange={this.onChange} value={this.state.value} required>
                       <option value="">Select</option>
                      {
                        this.props.suppliers.map((supplier) => (

                          <option value={supplier.supplier_id}>{supplier.supplier_name}</option>

                        ))
                      }
                    </Input>

                  </FormGroup>

                  <FormGroup>
                    <Label for="paid">Payment Status</Label>
                    <Input type="select" bsSize="sm" name="paid" onChange={this.onChange} value={this.state.value} required>
                       <option value="">{'Select'}</option>
                       <option value="0">Not Paid (Credit)</option>
                       <option value="1">Paid (Cash)</option>
                    </Input>

                  </FormGroup>


                </Col>
              </Row>
              <Row>
                <Col lg='6'>
                  <FormGroup>
                   { this.props.itemAdding!=="adding"?<Button>Submit</Button>:<div></div>}
                   { this.props.itemAdding==="adding"? <Button variant="primary" disabled> Submitting...</Button>:<div></div>}
                   { this.props.itemAdding==="not-added"?<FormFeedback tooltip>Stock product not added, Something is wrong!</FormFeedback>:<div></div>}

                  </FormGroup>
                </Col>
              </Row>

            </Form>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>

    );
   }
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

            <Form onSubmit={this.onUpdate}>
              <Row>
                <Col lg='6'>

                  {/* <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="select" bsSize="sm" name="name" onChange={this.onChange} value={this.state.value}>
                      
                       <option value={this.props.item.product.product_id}>{this.props.item.product.product_name}</option>
                    {
                      this.props.products.map((product) => {
                        if(product.product_id!==this.props.item.product.product_id){
                           return <option value={product.product_id}>{product.product_name}</option>
                        }

                      })
                    }
                    </Input>

                  </FormGroup> */}

                  <FormGroup>
                  <Label for="unit_price">Unit Price ( {this.props.item.product.unit} )</Label>
                    <Input type="number" name="unit_price" onChange={this.onChange} value={this.state.unit_price}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="unit_price">Quantity</Label>
                    <Input type="number" name="quantity" onChange={this.onChange} value={this.state.quantity}/>
                  </FormGroup>

                  <FormGroup>
                    <Label for="supplier">Supplier</Label>
                    <Input type="select" bsSize="sm" name="supplier" onChange={this.onChange} value={this.state.value}>
                  
                      <option value={this.props.item.supplier.supplier_id}>{this.props.item.supplier.supplier_name}</option>
                    {
                      
                      this.props.suppliers.map((supplier) => {
                        if(supplier.supplier_id!==this.props.item.supplier.supplier_id){
                           return <option value={supplier.supplier_id}>{supplier.supplier_name}</option>
                        }
                      })
                    }
                    </Input>

                  </FormGroup>

                  <FormGroup>
                    <Label for="paid">Payment Status</Label>
                    <Input type="select" bsSize="sm" name="paid" onChange={this.onChange} value={this.state.value} required>
                    {this.props.item.paid==0?<option value="0">Not Paid (Credit)</option>:<option value="1">Paid (Cash)</option>}
                      {this.props.item.paid!=0?<option value="0">Not Paid (Credit)</option>:<option value="1">Paid (Cash)</option>}
                      
        
                    </Input>

                  </FormGroup>


                </Col>
              </Row>
              <Row>
                <Col lg='6'>
                <FormGroup>
                   { this.props.itemAdding!=="adding"?<Button>Submit</Button>:<div></div>}
                   { this.props.itemAdding==="adding"? <Button variant="primary" disabled> Submitting...</Button>:<div></div>}
                   { this.props.itemAdding==="not-added"?<FormFeedback tooltip>Stock product not updated, Something is wrong!</FormFeedback>:<div></div>}

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
  itemAdding:state.stockProducts.addingItem
})

export default connect(mapStateToProps, { fetchSuppliers,fetchProducts,  createStockProduct,updateStockProduct,addingItem })(AddItemForm);