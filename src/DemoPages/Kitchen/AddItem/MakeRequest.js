import React, { Fragment } from 'react';

import {
  Row, Col, Form, FormGroup, Label, Input, Button, CustomInput
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { createRequest, updateRequest} from '../../../actions/kitchenActions';
import { PropTypes } from 'prop-types';
import { fetchStockProducts } from '../../../actions/stockProductActions';

class AddItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // name:this.props.item!==undefined?this.props.item.department_name:'',

      name: this.props.item !== undefined ? this.props.item.user.names : '',
      product: this.props.item !== undefined ? this.props.item.product.product_name : '',
      quantity: this.props.item !== undefined ? this.props.item.quantity : '',
      due_date: this.props.item !== undefined ? this.props.item.Due_date : '',
      date_made: this.props.item !== undefined ? this.props.item.log_date : '',
      comment: this.props.item !== undefined ? this.props.item.comment : '',

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
      user_id: this.props.auth.id,
      sp_id: this.state.product,
      qty: this.state.quantity,
      due_date: this.state.due_date,
      // date_made: new Date().toLocaleDateString(),
      comment: this.state.comment,
      // status code 3 means that this is a pending stock request
      status: 3,
      //kitchen department_id = 1
      dept_id: 1,
      // this.props.depts.department_id
      creator: this.props.auth.id,
    }

    console.log(product);
    this.props.createRequest(product);
    location.assign(`#/kitchen/manage-requests`)
  }

  onUpdate(e) {
    e.preventDefault();
    const request ={
      user_id: this.props.auth.id,
      sp_id: this.state.product,
      qty: this.state.quantity,
      due_date: this.state.due_date,
      // date_made: new Date().toLocaleDateString(),
      comment: this.state.comment,
      // status code 3 means that this is a pending stock request
      status: 3,
      //kitchen department_id = 1
      dept_id: 1,
      // this.props.depts.department_id
     
    }

    this.props.updateRequest(request);
    location.assign(`#/kitchen/manage-requests`)
  }
  componentDidMount() {
    const { fetchStockProducts } = this.props;

    fetchStockProducts()

  }
  render() {
    if (!this.props.item) {
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
                      <Input type="text" name="name" value={this.props.auth.username} disabled />
                    </FormGroup>

                    <FormGroup>
                      <Label for="name">Product</Label>
                      <Input type="select" name="product" value={this.state.value} onChange={this.onChange} required>
                        <option value="">select</option>
                        {this.props.stockProducts.map(stockProduct =>
                          <option value={stockProduct.stock_product_id}>
                            {stockProduct.product.product_name}
                          </option>
                        )}
                      </Input>
                      {/* <Input type="text" name="product" onChange={this.onChange} /> */}
                    </FormGroup>

                    <FormGroup>
                      <Label for="name">Quantity</Label>
                      <Input type="text" name="quantity" onChange={this.onChange} />
                    </FormGroup>

                    <FormGroup>
                      <Label for="name">Comment</Label>
                      <Input type="text" name="comment" onChange={this.onChange} />
                    </FormGroup>

                    <FormGroup>
                      <Label for="name">Date made</Label>
                      <Input type="text" name="date_made"
                        value={new Date().toLocaleString().replace(',', '')} onChange={this.onChange} disabled />
                      {/*  new Date().toISOString().slice(0,10)*/}
                    </FormGroup>

                    <FormGroup>
                      <Label for="name">Due date</Label>
                      <Input type="date" name="due_date" onChange={this.onChange} />
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
                    <Input type="text" name="name" value={this.state.name} disabled />
                  </FormGroup>

                  <FormGroup>
                    <Label for="name">Product</Label>
                    <Input type="select" name="product" value={this.state.value} onChange={this.onChange} required>
                      <option value="">select</option>
                      {this.props.stockProducts.map(stockProduct =>
                        <option value={stockProduct.stock_product_id}>
                          {stockProduct.product.product_name}
                        </option>
                      )}
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="name">Quantity</Label>
                    <Input type="text" name="quantity" onChange={this.onChange} value={this.state.quantity} />
                  </FormGroup>

                  <FormGroup>
                    <Label for="name">Comment</Label>
                    <Input type="text" name="comment" onChange={this.onChange} value={this.state.comment} />
                  </FormGroup>

                  <FormGroup>
                    <Label for="name">Date made</Label>
                    <Input type="text" name="date_made"
                      value={new Date().toLocaleString().replace(',', '')} onChange={this.onChange} value={this.props.item.log_date} disabled />
                  </FormGroup>

                  <FormGroup>
                    <Label for="name">Due date</Label>
                    <Input type="date" name="due_date" onChange={this.onChange} value={this.state.due_date} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg='6'>
                  <FormGroup>
                    <Button>Update</Button>
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
  createRequest: PropTypes.func.isRequired,
  fetchStockProducts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  kitchen: state.kitchen.items,
  auth: state.auth.user,
  depts: state.depts.items,
  stockProducts: state.stockProducts.items || [],
})

const mapDispatchToProps = {
  // fetchStockProducts:dispatch(fetchStockProducts()),
  // createRequest:dispatch(createRequest()),
  fetchStockProducts,
  createRequest,
  updateRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm);

