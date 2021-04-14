import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle3';


import DeptUsersTableBordered from './Tables/DeptUsersTableBordered';



class DeptUsersTable extends React.Component {
    uri='/departments/'+this.props.match.params.dept_id+'/add-new-department-users/'+this.props.match.params.name;
    state = {
        buttonOptions: [
            {
                id: 1,
                text: 'Add Users to department',
                uri: this.uri,
                icon: 'faPlusCircle'
            }
        ]
    }

    render() { 
        return <Fragment>
            <PageTitle
                heading="Department People"
                subheading={this.props.match.params.name}
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
                                <CardTitle></CardTitle>
                                <DeptUsersTableBordered dept_id={this.props.match.params.dept_id} />
                                
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    }
}


export default DeptUsersTable;
