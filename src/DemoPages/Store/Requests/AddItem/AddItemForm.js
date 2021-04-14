import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { createUser, fetchUsers } from '../../../../actions/userActions';
import { PropTypes } from 'prop-types'

class AddItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      phone: '',
      email: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
    }
    

    this.props.createUser(user);
  }
  componentDidMount(){
    this.props.fetchUsers()
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
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" onChange={this.onChange} />

                  </FormGroup>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" onChange={this.onChange} />

                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Telephone</Label>
                    <Input type="tel" name="phone" onChange={this.onChange} />

                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" onChange={this.onChange} />

                  </FormGroup>

                </Col>
                <Col lg="6">
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input type="text" name="address" onChange={this.onChange} />

                  </FormGroup>
                  <FormGroup>
                    <Label for="role">Role</Label>
                    <Input type="select" bsSize="sm" name="role" onChange={this.onChange} value={this.state.value}>
                      {
                        this.props.users.map((user) => (

                          <option value={user.username}>{user.name}</option>

                        ))
                      }
                    </Input>

                  </FormGroup>
                  <FormGroup>
                    <Label for="department">Department</Label>
                    <Input type="select" bsSize="sm" name="department" onChange={this.onChange} value={this.state.value}>
                      <option value="small1">Small Select</option>
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

AddItemForm.propTypes = {
  
}
const mapStateToProps= state =>({
  //users:state.users.items
})

export default connect(mapStateToProps,null)(AddItemForm);