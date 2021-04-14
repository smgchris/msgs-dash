import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle3';
import AddDepartment from '../AddDepartment';


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
        ],

        departments: [
            {
                id: 1,
                name: 'kitchen',
            }
        ]
    }

    // delete user
    delDepartment=(id) =>{
        this.setState({departments:[...this.state.departments.filter(department=> department.id!==id)]})
    }
    render() { 
        return <Fragment>
            <PageTitle
                heading="Platform Users"
                subheading="Registered users from various departments"
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
                                <DepartmentsTableBordered delDepartment={this.delDepartment} departments={this.state.departments}/>
                                
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    }
}


export default DepartmentsTable;
