import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { fetchMessages } from '../../../../actions/messageActions'

import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import AddItemForm from '../AddItem/AddItemForm'

class UpdateItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages:this.props.messages
        }
    }
    
    componentDidMount() {
        const { fetchMessages} = this.props
       
        fetchMessages()
    
    
    }

    componentDidUpdate(prevProps){
        
        if (this.props.messages !== prevProps.messages) {
            this.setState({
              messages: this.props.messages,
              
            })
          }
    }

    render() {

        if(typeof this.state.messages !== 'undefined' && this.state.messages.length === 0)
        return <div></div>

        const id=this.props.match.params.id 
        const item=this.props.messages.find(item=>""+item.id===""+id)
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
                                    <CardTitle>UPDATE MESSAGE</CardTitle>
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
    messages: state.messages.items || [],
  })

export default connect(mapStateToProps, {fetchMessages})(UpdateItem);
