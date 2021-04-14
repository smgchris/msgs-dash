import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import AddItemForm from '../AddItem/MakeRequest'

class UpdateItem extends React.Component {
    

    render() {
        // console.log(this.props.items.stocklog_id);
        const item=this.props.items.find(item=>item.stocklog_id===this.props.match.params.id)
        console.log("logging");
        console.log(this.props.match.params.id);
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
                                    <CardTitle>UPDATE REQUEST</CardTitle>
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
    items: state.kitchen.requests || [],
  })

export default connect(mapStateToProps, null)(UpdateItem);
