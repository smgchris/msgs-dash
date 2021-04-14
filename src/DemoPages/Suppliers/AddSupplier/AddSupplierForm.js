import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect} from 'react-redux';
import {createSupplier, updateSupplier,addingItem} from '../../../actions/supplierActions';
import {PropTypes} from 'prop-types'

class AddSupplierForm extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      name:this.props.item!==undefined?this.props.item.supplier_name:'',
      phone:this.props.item!==undefined?this.props.item.phone:'',
      email:this.props.item!==undefined?this.props.item.email:'',
      location:this.props.item!==undefined?this.props.item.location:'',
      creator:this.props.item!==undefined?this.props.item.created_by:'1',
      modifier:'1'
      
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate=this.onUpdate.bind(this);
  }
  
  onSubmit=(e)=>{
    e.preventDefault();
    const supplier={
      name:this.state.name,
      phone:this.state.phone,
      email:this.state.email,
      location:this.state.location,
      creator:this.state.creator
      
    }
    this.props.createSupplier(supplier)
    this.props.addingItem()


  }
  onUpdate=(e)=>{
    e.preventDefault();
    const supplier={
      supplier_id:this.props.item_id,
      name:this.state.name,
      phone:this.state.phone,
      email:this.state.email,
      location:this.state.location,
      modifier:this.state.modifier
     
    }
    this.props.updateSupplier(supplier)
    this.props.addingItem()


  }

  onChange=(e)=>this.setState({[e.target.name]:e.target.value
  });

  render() {
    if(this.props.itemAdding==="added"){
      location.assign("#/suppliers/manage-suppliers")
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
                    <Input type="text" name="name" onChange={this.onChange}/>

                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Telephone</Label>
                    <Input type="tel" name="phone" onChange={this.onChange}/>

                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" onChange={this.onChange}/>

                  </FormGroup>

                </Col>
                <Col lg="6">
                  <FormGroup>
                    <Label for="location">Address</Label>
                    <Input type="text" name="location" onChange={this.onChange}/>

                  </FormGroup>
                  {/* <FormGroup>
                    <Label for="payment_mode">Payment Mode</Label>
                    <Input type="text" name="payment_mode" onChange={this.onChange}/>

                  </FormGroup> */}

                </Col>
              </Row>
              <Row>
                <Col lg='6'>
                <FormGroup>
                   { this.props.itemAdding!=="adding"?<Button>Submit</Button>:<div></div>}
                   { this.props.itemAdding==="adding"? <Button variant="primary" disabled> Submitting...</Button>:<div></div>}
                   { this.props.itemAdding==="not-added"?<FormFeedback tooltip>Supplier not updated, Something is wrong!</FormFeedback>:<div></div>}

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
                    <Input type="text" name="name" onChange={this.onChange} value={this.state.name}/>

                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Telephone</Label>
                    <Input type="tel" name="phone" onChange={this.onChange} value={this.state.phone}/>

                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" onChange={this.onChange} value={this.state.email}/>

                  </FormGroup>

                </Col>
                <Col lg="6">
                  <FormGroup>
                    <Label for="location">Address</Label>
                    <Input type="text" name="location" onChange={this.onChange} value={this.state.location}/>

                  </FormGroup>
                 

                </Col>
              </Row>
              <Row>
                <Col lg='6'>
                <FormGroup>
                   { this.props.itemAdding!=="adding"?<Button>Submit</Button>:<div></div>}
                   { this.props.itemAdding==="adding"? <Button variant="primary" disabled> Submitting...</Button>:<div></div>}
                   { this.props.itemAdding==="not-added"?<FormFeedback tooltip>Supplier is not updated, Something is wrong!</FormFeedback>:<div></div>}

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
AddSupplierForm.propTypes ={
  createSupplier:PropTypes.func.isRequired,
}
const mapStateToProps= state =>({
  itemAdding:state.suppliers.addingItem
})

export default connect(mapStateToProps,{createSupplier,updateSupplier,addingItem})(AddSupplierForm);
