import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';
import { connect } from 'react-redux'

import PageTitle from '../../../Layout/AppMain/PageTitle3';
import DebtsTable from '../Debts/Tables/DebtsTable';
import { fetchStockProducts } from '../../../actions/stockProductActions';
import {  fetchSuppliers } from '../../../actions/supplierActions';



class Debts extends React.Component {
    state = {
        buttonOptions: [
            {
                
            }
        ],

    }
    componentDidMount(){
        const {fetchStockProducts,fetchSuppliers}=this.props
        fetchSuppliers()
        fetchStockProducts()
    }

    render() { 
       
        // if(JSON.stringify(this.props.items)==JSON.stringify([]))
        // {
        //     this.props.fetchStockProducts()
        // }
        
        const item=this.props.items.filter(item=>item.supplier_id===this.props.match.params.id)
        let subheading="Purchases not paid from " +this.props.match.params.name
        return <Fragment>
            <PageTitle
                heading="Debts "
                subheading={subheading}
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
                                <CardTitle>Supplier Debts</CardTitle>
                                <DebtsTable supplier_id={this.props.match.params.id} supplier={item}/>
                                
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    }
}

const mapStateToProps = state => ({
    items: state.suppliers.items,
    sp:state.stockProducts.items
  })

export default connect(mapStateToProps, {fetchSuppliers, fetchStockProducts})(Debts);
