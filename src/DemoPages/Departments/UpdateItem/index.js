import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import AddItemForm from '../AddDepartment/AddDepartmentForm'

class UpdateItem extends React.Component {
    

    render() {
        const item=this.props.items.find(item=>item.department_id===this.props.match.params.dept_id)
        console.log(item)
        return (
            <Fragment>
            
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Row>
                        <Col lg="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>UPDATE DEPARTMENT</CardTitle>
                                    <AddItemForm item_id={this.props.match.params.dept_id} item={item}/>
                                </CardBody>
                            </Card>
                            
                        </Col>

                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    items: state.depts.items || [],
  })

export default connect(mapStateToProps, null)(UpdateItem);
