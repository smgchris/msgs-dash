import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle3';


import DepartmentsTableBordered from './Tables/DepartmentsTableBordered';



class DepartmentsTable extends React.Component {
    state = {
        buttonOptions: [
            {
                id: 1,
                text: 'Add new department',
                uri: 'add-new-department',
                icon: 'faPlusCircle'
            }
        ]
    }

    render() { 
        return <Fragment>
            <PageTitle
                heading="Departments"
                subheading="Company departments"
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
                                <CardTitle>Departments</CardTitle>
                                <DepartmentsTableBordered />
                                
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    }
}


export default DepartmentsTable;
