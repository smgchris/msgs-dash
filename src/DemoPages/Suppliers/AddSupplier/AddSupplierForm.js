import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class AddSupplierForm extends React.Component { 
  state={
      name:'',
      phone:'',
      email:'',
      address:'',
      paymentMode:''
    }
  
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.addSupplier(this.state)

  }

  onChange=(e)=>this.setState({[e.target.name]:e.target.value
  });

  render() {
   
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
                    <Label for="address">Address</Label>
                    <Input type="text" name="address" onChange={this.onChange}/>

                  </FormGroup>
                  <FormGroup>
                    <Label for="paymentMode">Payment Mode</Label>
                    <Input type="text" name="paymentMode" onChange={this.onChange}/>

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
