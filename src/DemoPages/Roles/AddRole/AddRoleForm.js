import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect} from 'react-redux';
import {createRole,updateRole} from '../../../actions/roleActions';
import {PropTypes} from 'prop-types'

class AddRoleForm extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      name:this.props.item!==undefined?this.props.item.role_name:'',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate=this.onUpdate.bind(this);
  }
  onSubmit=(e)=>{
    e.preventDefault();

    const role={
      role_name:this.state.name,
    }

    this.props.createRole(role)

  }

  onChange=(e)=>this.setState({[e.target.name]:e.target.value
  });

  onUpdate(e){
    e.preventDefault;
    const role={
      role_name:this.state.name,
    }
    this.props.updateRole(role)
  }

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
                    <Label for="name">Role name</Label>
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
AddRoleForm.propTypes ={
  createRole:PropTypes.func.isRequired,
}

export default connect(null,{createRole,updateRole})(AddRoleForm);
