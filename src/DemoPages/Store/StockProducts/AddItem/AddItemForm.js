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
      unit: this.props.item!==undefined?this.props.item.unit:'',
      unit_price: this.props.item!==undefined?this.props.item.unit_price:'',
      supplier: this.props.item!==undefined?this.props.item.supplier.supplier_id:'',
      quantity: this.props.item!==undefined?this.props.item.entryQuantity:'',
      expiration:this.props.item!==undefined?this.props.item.expirationDate:'',
      paid:this.props.item!==undefined?this.props.item.paid:'',
      creator:this.props.item!==undefined?this.props.item.created_by:this.props.user.id,
      modifier: this.props.user.id,
      note:this.props.item!==undefined?this.props.item.payt_note:'',

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
      unit: this.state.unit,
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
      unit: this.state.unit,
      unit_price: this.state.unit_price,
      supplier_id: this.state.supplier,
      qty: this.state.quantity,
      expiration:this.state.expiration,
      paid:this.state.paid,
      modifier:this.state.modifier,
      note:this.state.note

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
      window.location.assign("#/store/stock/manage-stock")
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

                        <option value={product.product_id}>{product.product_name}</option>

                        ))
                      }
                    </Input>

                  </FormGroup>

                  
                  <FormGroup>
                    <Label for="unit">Unit of Measurement</Label>
                    <Input type="select" bsSize="sm" name="unit" onChange={this.onChange} value={this.state.value} required>
                    <option value="">{'Select'}</option>
                    <option value="Kg">Kg</option>
                    <option value="Litre">Litre</option>
                    <option value="Bottle">Bottle</option>
                    <option value="Crate">Crate</option>
                    <option value="Box">Box</option>
                    <option value="Tray">Tray</option>
                    <option value="Dozen">Dozen</option>
                  
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

                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" bsSize="sm" name="name" onChange={this.onChange}  value={this.props.item.product.product_name}   disabled></Input>

                  </FormGroup>
                  <FormGroup>
                    <Label for="unit">Unit of Measurement{this.props.user.role!=1&&this.props.user.role!=2?': '+this.props.item.unit:''}</Label>
                    {this.props.user.role==1||this.props.user.role==2?
                    <Input type="select" bsSize="sm" name="unit" onChange={this.onChange} value={this.state.value} required>
                    <option value={this.props.item.unit}>{this.props.item.unit}</option>
                    <option value="Kg">Kg</option>
                    <option value="Litre">Litre</option>
                    <option value="Bottle">Bottle</option>
                    <option value="Crate">Crate</option>
                    <option value="Box">Box</option>
                    <option value="Tray">Tray</option>
                    <option value="Dozen">Dozen</option>
                  
                  </Input>:''}
                  </FormGroup>
                  <FormGroup>
                  <Label for="unit_price">Unit Price{this.props.user.role!=1&&this.props.user.role!=2?': '+this.props.item.unit_price:''}</Label>
                  {this.props.user.role==1||this.props.user.role==2?
                    <Input type="number" name="unit_price" onChange={this.onChange} value={this.state.unit_price}/>:''}
                  </FormGroup>
                  <FormGroup>
                    <Label for="unit_price">Quantity{this.props.user.role!=1&&this.props.user.role!=2?': '+this.props.item.entryQuantity:''}</Label>
                    {this.props.user.role==1||this.props.user.role==2?
                    <Input type="number" name="quantity" onChange={this.onChange} value={this.state.quantity} />:''}
                  </FormGroup>

                  <FormGroup>
                    <Label for="supplier">Supplier{this.props.user.role!=1&&this.props.user.role!=2?': '+this.props.item.supplier.supplier_name:''}</Label>
                    {this.props.user.role==1||this.props.user.role==2?
                    <Input type="select" bsSize="sm" name="supplier" onChange={this.onChange} value={this.state.value}>
                  
                      <option value={this.props.item.supplier.supplier_id}>{this.props.item.supplier.supplier_name}</option>
                    {
                      
                      this.props.suppliers.map((supplier) => {
                        if(supplier.supplier_id!==this.props.item.supplier.supplier_id){
                           return <option value={supplier.supplier_id}>{supplier.supplier_name}</option>
                        }
                      })
                    }
                    </Input>:''}

                  </FormGroup>

                  <FormGroup>
                    <Label for="paid">Payment Status</Label>
                    <Input type="select" bsSize="sm" name="paid" onChange={this.onChange} value={this.state.value} required>
                    {this.props.item.paid==0?<option value="0">Not Paid (Credit)</option>:<option value="1">Paid (Cash)</option>}
                      {this.props.item.paid!=0?<option value="0">Not Paid (Credit)</option>:<option value="1">Paid (Cash)</option>}
                      
        
                    </Input>

                  </FormGroup>
                  {this.state.paid=="1"?
                  <FormGroup>
                    <Label for="note">Payment Note (Eg: paid via momo)</Label>
                    <Input type="text" bsSize="sm" name="note" onChange={this.onChange} value={this.state.value} required>
                    </Input>

                  </FormGroup>:''}


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
  itemAdding:state.stockProducts.addingItem,
  user:state.auth.user
})

export default connect(mapStateToProps, { fetchSuppliers,fetchProducts,  createStockProduct,updateStockProduct,addingItem })(AddItemForm);