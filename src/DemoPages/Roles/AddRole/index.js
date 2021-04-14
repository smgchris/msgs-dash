import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import AddRoleForm from './AddRoleForm'

class AddRole extends React.Component {

    //add Role
    addRole=(role)=>{
        console.log(role.rolename)
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
                    <Row>
                        <Col lg="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>ADD ROLE</CardTitle>
                                    <AddRoleForm addRole={this.addRole}/>
                                </CardBody>
                                
                            </Card>
                        </Col>

                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}


export default AddRole;
