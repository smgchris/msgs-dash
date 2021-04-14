import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import {createProduct,updateProduct,fetchProducts, addingItem } from '../../../../actions/productActions';
import {fetchProductCategs } from '../../../../actions/categoryActions';
import { PropTypes } from 'prop-types'
import { fetchStockProducts } from '../../../../actions/stockProductActions';

class AddItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name:this.props.item!==undefined?this.props.item.product_name:'',
      category:this.props.item!==undefined?this.props.item.cat_id:'',
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

    const product = {
      name: this.state.name,
      cat_id: this.state.category,
      creator:this.state.creator
    }

    this.props.createProduct(product);
    this.props.addingItem()


    //location.assign("#/store/products/manage-products")
  }

  onUpdate(e) {
    e.preventDefault();

    const product = {
      product_id:this.props.item_id,
      name: this.state.name,
      cat_id: this.state.category,
      unit: this.state.unit,
      modifier:this.state.modifier
    }

    this.props.updateProduct(product);
    this.props.addingItem()

    //location.assign("#/store/products/manage-products")
  }
  componentDidMount(){
    const {fetchProductCategs} = this.props
    fetchProductCategs()
  }
  render() {
    if(this.props.itemAdding==="added"){
      window.location.assign("#/store/products/manage-products")
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
                    <Input type="text" name="name" onChange={this.onChange} required/>
                  </FormGroup>
                  
    
                  <FormGroup>
                    <Label for="category">Category</Label>
                    <Input type="select" bsSize="sm" name="category" onChange={this.onChange} value={this.state.value} required>
                      <option value="">{'Select'}</option>
                      {
                        this.props.categories.map((category) => (

                          <option value={category.category_id}>{category.category_name}</option>

                        ))
                      }
                    </Input>

                  </FormGroup>
                  
                </Col>
              </Row>
              <Row>
                <Col lg='6'>
                  <FormGroup>
                  { this.props.itemAdding!=="adding"?<Button>Submit</Button>:<div></div>}
                   { this.props.itemAdding==="adding"? <Button variant="primary" disabled> Submitting...</Button>:<div></div>}
                   { this.props.itemAdding==="not-added"?<FormFeedback tooltip>product not added, Something is wrong!</FormFeedback>:<div></div>}

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
                  <Input type="text" name="name" onChange={this.onChange} value={this.state.name} />
                </FormGroup>
                <FormGroup>
                    <Label for="unit">Unit of Measurement</Label>
                    <Input type="select" bsSize="sm" name="unit" onChange={this.onChange} value={this.state.value} >
                    <option value={this.props.item.unit}>{this.props.item.unit}</option>
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
                  <Label for="category">Category</Label>
                  <Input type="select" bsSize="sm" name="category" onChange={this.onChange} value={this.state.value} >
                    <option value={this.props.item.category.category_id}>{this.props.item.category.category_name}</option>
                    {
                      this.props.categories.map((category) => {
                        if(category.category_id!==this.props.item.category.category_id){
                           return <option value={category.category_id}>{category.category_name}</option>
                        }

                      })
                    }
                  </Input>

                </FormGroup>
                
              </Col>
            </Row>
            <Row>
              <Col lg='6'>
                <FormGroup>
                { this.props.itemAdding!=="adding"?<Button>Submit</Button>:<div></div>}
                   { this.props.itemAdding==="adding"? <Button variant="primary" disabled> Submitting...</Button>:<div></div>}
                   { this.props.itemAdding==="not-added"?<FormFeedback tooltip>product not added, Something is wrong!</FormFeedback>:<div></div>}

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



AddItemForm.propTypes = {
  createProduct: PropTypes.func.isRequired,
  
}
const mapStateToProps= state =>({
  products:state.products.items,
  categories:state.prodCategories.items,
  itemAdding:state.products.addingItem
})

export default connect(mapStateToProps, { createProduct,updateProduct, fetchProducts,fetchProductCategs,addingItem })(AddItemForm);