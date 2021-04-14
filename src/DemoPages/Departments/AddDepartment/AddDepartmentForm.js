import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect} from 'react-redux';
import {createDept,updateDept,fetchDepts, addingItem} from '../../../actions/deptActions';
import {PropTypes} from 'prop-types'


class AddDepartmentForm extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      name:this.props.item!==undefined?this.props.item.department_name:'',
      submitButton:false,
      creator:this.props.item!==undefined?this.props.item.created_by:'1',
      modifier:'1',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate=this.onUpdate.bind(this);
  }
  onSubmit=(e)=>{
    e.preventDefault();
    const dept={
      dept_name:this.state.name,
      creator:this.state.creator
    }
    
    this.props.createDept(dept)
    
    this.props.addingItem()

  }

  onUpdate(e) {
    e.preventDefault();

    const dept = {
      dept_id:this.props.item_id!==undefined?this.props.item_id:'',
      dept_name:this.state.name,
      modifier:this.state.modifier
    }

    this.props.updateDept(dept);
    this.props.addingItem()
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount(){
    this.props.fetchDepts();
  }

  render() {

    if(this.props.itemAdding==="added"){
      location.assign("#/departments/manage-departments")
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
  
                  </Col>
                  
                </Row>
                <Row>
                  <Col lg='6'>
                    <FormGroup>
                    { this.props.itemAdding!=="adding"?<Button>Submit</Button>:<div></div>}
                   { this.props.itemAdding==="adding"? <Button variant="primary" disabled> Submitting...</Button>:<div></div>}
                   { this.props.itemAdding==="not-added"?<FormFeedback tooltip>department not added, Something is wrong!</FormFeedback>:<div></div>}
  
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
                    <Input type="text" name="name" onChange={this.onChange} value={this.state.name} required/>
                  </FormGroup>
                </Col>
                
              </Row>
              <Row>
                <Col lg='6'>
                  <FormGroup>
                   { this.props.itemAdding!=="adding"?<Button>Submit</Button>:<div></div>}
                   { this.props.itemAdding==="adding"? <Button variant="primary" disabled> Submitting...</Button>:<div></div>}
                   { this.props.itemAdding==="not-added"?<FormFeedback tooltip>department not updated, Something is wrong!</FormFeedback>:<div></div>}

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
AddDepartmentForm.propTypes ={
  createDept:PropTypes.func.isRequired,
}
const mapStateToProps= state =>({
  itemAdding:state.depts.addingItem
})
export default connect(mapStateToProps,{createDept,updateDept,fetchDepts, addingItem})(AddDepartmentForm);