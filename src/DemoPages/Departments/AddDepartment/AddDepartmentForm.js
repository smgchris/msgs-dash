import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class AddDepartmentForm extends React.Component { 
  state={
      name:''
    }
  
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.addDepartment(this.state)

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
