import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class AddUserForm extends React.Component { 
  state={
      username:'',
      name:'',
      phone:'',
      email:'',
      address:'',
      role:'',
      department:''
    }
  
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.addUser(this.state)

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
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" onChange={this.onChange}/>

                  </FormGroup>
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
                    <Label for="role">Role</Label>
                    <Input type="text" name="role" onChange={this.onChange}/>

                  </FormGroup>
                  <FormGroup>
                    <Label for="department">Department</Label>
                    <Input type="text" name="department" onChange={this.onChange}/>

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
