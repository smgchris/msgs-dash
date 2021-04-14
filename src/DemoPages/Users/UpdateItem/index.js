import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import AddUserForm from '../AddUser/AddUserForm'

class UpdateItem extends React.Component {
    

    render() {
        const user=this.props.users.find(user=>user.user_id===this.props.match.params.id)
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
                                    <CardTitle>UPDATE USER</CardTitle>
                                    <AddUserForm item_id={this.props.match.params.id} user={user}/>
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
    users: state.users.items || [],
  })

export default connect(mapStateToProps, null)(UpdateItem);
