import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import MakeRequest from './MakeRequest'

class AddRequest extends React.Component {


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
                                    <CardTitle>Make Request</CardTitle>
                                    <MakeRequest />
                                </CardBody>
                            </Card>
                            
                        </Col>

                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}


export default AddRequest;
