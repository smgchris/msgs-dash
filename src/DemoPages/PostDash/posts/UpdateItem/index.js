import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { createPost, fetchPosts, fetchPostsJson, pickNode, addingItem } from '../../../../actions/postActions';
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
            posts:this.props.posts,
            messages:this.props.messages
        }
    }
    
    componentDidMount() {
        const { fetchPosts, fetchPostsJson, fetchMessages, pickNode } = this.props
        fetchPosts()
        fetchPostsJson()
        fetchMessages()
    
    
    }

    componentDidUpdate(prevProps){
        
        if (this.props.posts !== prevProps.posts) {
            this.setState({
              posts: this.props.posts,
              
            })
          }
    }
    render() {

        if(typeof this.state.posts !== 'undefined' && this.state.posts.length === 0)
        return <div></div>
 
        const id=this.props.match.params.id 
        const node=this.state.posts.find(item=>item.id==id)

        let parent_id=node.parent_id
        
        const parentNode=this.state.posts.find(item=>item.node_id==parent_id)
        
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
                            
                                    <CardTitle>UPDATE IVR POST</CardTitle>
                                    <AddItemForm item_id={this.props.match.params.id} item={node} parentNode={parentNode}/>
                               
                            
                        </Col>

                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    posts: state.posts.items || [],
    messages:state.messages.items || [],
  })

export default connect(mapStateToProps, {fetchMessages,fetchPostsJson,fetchPosts})(UpdateItem);
