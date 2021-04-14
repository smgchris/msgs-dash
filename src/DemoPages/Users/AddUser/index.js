import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import AddUserForm from './AddUserForm'

class AddUser extends React.Component {

    //add User
    addUser=(user)=>{
        console.log(user.username)
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
                                    <CardTitle>ADD USER</CardTitle>
                                    <AddUserForm addUser={this.addUser}/>
                                </CardBody>
                                
                            </Card>
                        </Col>

                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}


export default AddUser;
