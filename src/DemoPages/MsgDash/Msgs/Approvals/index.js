import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../../Layout/AppMain/PageTitle3';


import ItemsTable from './Tables/ItemsTable';



class Tables extends React.Component {
    state = {
        buttonOptions: [
            {
                id: 1,
                text: 'Add new Message',
                uri: 'add-new-message',
                icon: 'faPlusCircle'
            }
        ]
    }

    render() { 
        return <Fragment>
            <PageTitle
                heading="Messages to Approve"
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
                        
                     
                                <ItemsTable />
                            
                    </Col>

                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    }
}


export default Tables;
