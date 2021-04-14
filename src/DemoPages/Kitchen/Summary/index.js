import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Tabs from 'react-responsive-tabs';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle3';
import BuffetStockTable from './Table/BuffetStockTable';



class StockTable extends React.Component {
    state = {
        buttonOptions: [
            {
                id: 1,
                text: null,
                uri: null,
                            }
        ]
    }

    render() { 
        return <Fragment>
            <PageTitle
                heading="Kitchen Summary"
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
                                <CardTitle>Summary</CardTitle>
                                <BuffetStockTable />
                                
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    }
}


export default StockTable;

