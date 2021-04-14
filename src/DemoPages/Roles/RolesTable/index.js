import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle3';
import AddRole from '../AddRole';


import RolesTableBordered from './Tables/RolesTableBordered';



class RolesTable extends React.Component {
    state = {
        buttonOptions: [
           
        ],

    }

    // delete role
    delRole=(id) =>{
        this.setState({roles:[...this.state.roles.filter(role=> role.id!==id)]})
    }
    render() { 
        return <Fragment>
            <PageTitle
                heading="Platform Roles"
                subheading=""
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
                                <CardTitle>Roles</CardTitle>
                                <RolesTableBordered/>
                                
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    }
}


export default RolesTable;
