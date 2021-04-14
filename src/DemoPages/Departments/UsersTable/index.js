import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle3';
import UsersTableBordered from './Tables/UsersTableBordered';



class UsersTable extends React.Component {
    state = {
        buttonOptions: [
           
        ]
    }

    render() { 
        const heading="Add People to  "+this.props.match.params.name
        return <Fragment>
            <PageTitle
                heading={heading}
                subheading="department"
                icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
                buttonOptions={this.state.buttonOptions}

            />
            
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
                                <CardTitle>Users</CardTitle>
                                <UsersTableBordered  dept_id={this.props.match.params.dept_id}/>
                                
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    }
}


export default UsersTable;
