import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import {createProductCateg,updateCateg,fetchProductCategs,addingItem } from '../../../../actions/categoryActions';
import { PropTypes } from 'prop-types'

class AddItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.item!==undefined?this.props.item.category_name:'',
      creator: this.props.item!==undefined?this.props.item.created_by:'1',
      modifier:'1'
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate=this.onUpdate.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const category = {
      cat_name: this.state.name,
      creator:this.state.creator
    }

    this.props.createProductCateg(category);
    
    this.props.addingItem()

    
  }

  onUpdate(e) {
    e.preventDefault();

    const category = {
      cat_id:this.props.item_id,
      cat_name: this.state.name,
      modifier:this.state.modifier
    }
    this.props.updateCateg(category);

    this.props.addingItem()
    
  }
  componentDidMount(){
    //this.props.fetchProductCategs
  }
  render() {
    if(this.props.itemAdding==="added"){
      window.location.assign("#/store/categories/manage-product-categories")
    }
    const {item}=this.props;
    if(!this.props.item){
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
                    { this.props.itemAdding!=="adding"?<Button>Submit</Button>:<div></div>}
                   { this.props.itemAdding==="adding"? <Button variant="primary" disabled> Submitting...</Button>:<div></div>}
                   { this.props.itemAdding==="not-added"?<FormFeedback tooltip>category not added, Something is wrong!</FormFeedback>:<div></div>}

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
                </Col>
              </Row>
              <Row>
                <Col lg='6'>
                  <FormGroup>
                  { this.props.itemAdding!=="adding"?<Button>Submit</Button>:<div></div>}
                   { this.props.itemAdding==="adding"? <Button variant="primary" disabled> Submitting...</Button>:<div></div>}
                   { this.props.itemAdding==="not-added"?<FormFeedback tooltip>category not added, Something is wrong!</FormFeedback>:<div></div>}

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
  createProductCateg: PropTypes.func.isRequired,
  
}
const mapStateToProps= state =>({
  
  itemAdding:state.prodCategories.addingItem
})

export default connect(null, { createProductCateg, updateCateg,fetchProductCategs,addingItem })(AddItemForm);