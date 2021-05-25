import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';
import ReactCSSTransitionGroup, { propTypes } from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { createUser, updateUser, addingItem } from '../../../actions/userActions';
import { fetchRoles } from '../../../actions/roleActions';
import { PropTypes } from 'prop-types'

class AddUserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user !== undefined ? this.props.user.username : '',
      name: this.props.user !== undefined ? this.props.user.names : '',
      role: this.props.user !== undefined ? this.props.user.role_id : '',
      phone: this.props.user !== undefined ? this.props.user.phone : '',
      email: this.props.user !== undefined ? this.props.user.email : '',
      password: this.props.user !== undefined ? this.props.user.password : '',
      address: this.props.user !== undefined ? this.props.user.address : '',
      id_number: this.props.user !== undefined ? this.props.user.id_number : '',
      permissions: [],
      creator: '1',
      submitButton: false,
      loading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  mySet1 = new Set()


  onCheckChange(e) {
    if (e.target.checked)
      this.mySet1.add(e.target.value)
    else
      this.mySet1.delete(e.target.value)

    this.setState({ permissions: this.state.permissions.concat(e.target.value) });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true })

    console.log(Array.from(this.mySet1))

    const user = {
      username: this.state.username,
      name: this.state.name,
      role: this.state.role,
      phone_number: this.state.phone,
      email: this.state.email,
      address: this.state.address,
      id_number: this.state.id_number,
      password: this.state.password,
      creator: this.state.creator,

      permissions:Array.from(this.mySet1)
    }

    this.props.createUser(user);
    this.props.addingItem()



  }

  onUpdate(e) {
    e.preventDefault();

    const user = {
      user_id: this.props.item_id !== undefined ? this.props.item_id : '',
      username: this.state.username,
      name: this.state.name,
      role: this.state.role,
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address,
      id_number: this.state.id_number,
      password: this.state.password,
      modifier: this.state.creator
    }

    this.props.updateUser(user);
    this.props.addingItem()


    // this.props.createUser(user);

    //window.location.assign(`#/users/manage-users`);

  }

  componentDidMount() {
    this.props.fetchRoles()

  }
  render() {
    if (this.props.itemAdding === "added") {
      window.location.assign("#/users/manage-users")
    }

    if (!this.props.user) {
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
                    {/* <FormGroup>
                      <Label for="username">Username</Label>
                      <Input type="text" name="username" onChange={this.onChange} required/>
  
                    </FormGroup> */}
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input type="text" name="name" onChange={this.onChange} required />

                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input type="email" name="email" onChange={this.onChange} />

                    </FormGroup>
                    {/* <FormGroup>
                      <Label for="address">Address</Label>
                      <Input type="text" name="address" onChange={this.onChange} required/>
  
                    </FormGroup> */}
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input type="password" name="password" onChange={this.onChange} required />

                    </FormGroup>

                    <CardTitle>Grant Permissions</CardTitle>

                    {
                      this.props.roles.map((role) => (
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" name={"role"} value={role.id} id={role.id} onChange={this.onCheckChange} />{' ' + role.name}
                          </Label>
                        </FormGroup>

                      ))
                    }
                    <FormGroup></FormGroup>



                    {/* <FormGroup>
                      <Label for="phone">Telephone</Label>
                      <Input type="number" name="phone" onChange={this.onChange} required/>
  
                    </FormGroup>
                    <FormGroup>
                      <Label for="id_number">ID number</Label>
                      <Input type="number" name="id_number" onChange={this.onChange} />
  
                    </FormGroup> */}




                  </Col>
                </Row>
                <Row>
                  <Col lg='6'>
                    <FormGroup>
                      {this.props.itemAdding !== "adding" ? <Button>Submit</Button> : <div></div>}
                      {this.props.itemAdding === "adding" ? <Button variant="primary" disabled> Submitting...</Button> : <div></div>}
                      {this.props.itemAdding === "added" ? <Button variant="primary" disabled> Submitted</Button> : <div></div>}
                      {this.props.itemAdding === "not-added" ? <FormFeedback tooltip>User not created, Something is wrong!</FormFeedback> : <div></div>}

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
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" onChange={this.onChange} value={this.state.username} required />

                  </FormGroup>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" onChange={this.onChange} value={this.state.name} required />

                  </FormGroup>
                  <FormGroup>
                    <Label for="role">Role</Label>
                    <Input type="select" bsSize="sm" name="role" onChange={this.onChange} value={this.state.value} >

                      <option value={this.props.user.role_id}>{this.props.user.role.role_name}</option>
                      {

                        this.props.roles.map((role) => {
                          if (role.role_id !== this.props.user.role_id) {
                            return <option value={role.role_id}>{role.role_name}</option>
                          }
                        })
                      }
                    </Input>

                  </FormGroup>
                  <FormGroup>
                    <Label for="phone">Telephone</Label>
                    <Input type="number" name="phone" onChange={this.onChange} value={this.state.phone} required />

                  </FormGroup>
                  <FormGroup>
                    <Label for="id_number">ID number</Label>
                    <Input type="number" name="id_number" onChange={this.onChange} value={this.state.id_number} />

                  </FormGroup>

                </Col>
                <Col lg="6">
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" onChange={this.onChange} value={this.state.email} />

                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input type="text" name="address" onChange={this.onChange} value={this.state.address} required />

                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" onChange={this.onChange} />

                  </FormGroup>

                </Col>
              </Row>
              <Row>
                <Col lg='6'>
                  <FormGroup>
                    {this.props.itemAdding !== "adding" ? <Button>Submit</Button> : <div></div>}
                    {this.props.itemAdding === "adding" ? <Button variant="primary" disabled> Submitting...</Button> : <div></div>}
                    {this.props.itemAdding === "not-added" ? <FormFeedback tooltip>User not updated, Something is wrong!</FormFeedback> : <div></div>}

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

const mapStateToProps = state => ({
  users: state.users.items,
  status: state.users.status,
  departments: state.depts.items,
  roles: state.roles.items,
  itemAdding: state.users.addingItem
})

export default connect(mapStateToProps, { createUser, updateUser, addingItem, fetchRoles })(AddUserForm);