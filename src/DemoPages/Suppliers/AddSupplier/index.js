import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import AddSupplierForm from './AddSupplierForm'

class AddSupplier extends React.Component {

    //add Supplier
    addSupplier=(supplier)=>{
        console.log(supplier.suppliername)
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
                                    <CardTitle>ADD SUPPLIER</CardTitle>
                                    <AddSupplierForm addSupplier={this.addSupplier}/>
                                </CardBody>
                                
                            </Card>
                        </Col>

                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}


export default AddSupplier;
