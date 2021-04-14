import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle3';
import AddSupplier from '../AddSupplier';


import SuppliersTableBordered from './Tables/SupplierTableBordered';



class SuppliersTable extends React.Component {
    state = {
        buttonOptions: [
            {
                id: 1,
                text: 'Add new Supplier',
                uri: 'add-new-supplier',
                icon: 'faPlusCircle'
            }
        ],

        suppliers: [
            {
                id: 1,
                name: 'Potatoes Ltd',
                phone: '+250787161944',
                email: 'gorillla@munezero.com',
                address:'',
                paymentMode:''
            }
        ]
    }

    // delete supplier
    delSupplier=(id) =>{
        this.setState({suppliers:[...this.state.suppliers.filter(supplier=> supplier.id!==id)]})
    }
    render() { 
        return <Fragment>
            <PageTitle
                heading="Platform Suppliers"
                subheading="Registered suppliers from various departments"
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
                                <CardTitle>Suppliers</CardTitle>
                                <SuppliersTableBordered delSupplier={this.delSupplier} suppliers={this.state.suppliers}/>
                                
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    }
}


export default SuppliersTable;
