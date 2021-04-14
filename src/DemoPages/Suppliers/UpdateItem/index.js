import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import AddItemForm from '../AddSupplier/AddSupplierForm'

class UpdateItem extends React.Component {
    

    render() {
        const item=this.props.items.find(item=>item.supplier_id===this.props.match.params.id)
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
                                    <CardTitle>UPDATE SUPPLIER</CardTitle>
                                    <AddItemForm item_id={this.props.match.params.id} item={item}/>
                                </CardBody>
                            </Card>
                            
                        </Col>

                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    items: state.suppliers.items || [],
  })

export default connect(mapStateToProps, null)(UpdateItem);
