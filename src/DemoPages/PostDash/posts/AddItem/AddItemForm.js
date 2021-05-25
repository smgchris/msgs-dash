import React, { Fragment, useState } from 'react';

import {
  Card, CardBody, Row, Col, CardFooter,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { fetchSuppliers } from '../../../../actions/supplierActions';
import { createPost, fetchPosts, fetchPostsJson, pickNode, addingItem } from '../../../../actions/postActions';
import { fetchMessages } from '../../../../actions/messageActions'
import Message from '../../../MsgDash/templates/Message'
import { faCheckCircle, faCross, faEdit, faMicrophone, faPencilAlt, faShare, faShareAlt, faTimes, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Recorder } from '../../../../react-voice-recorder'
import '../../../../react-voice-recorder/dist/index.css'

import Post from '../../templates/Post'
import Thumb from '../../templates/thumb';
import Tree from '../../templates/tree/Tree';
import PostThumb from '../../templates/postThumb';

import { useHistory } from 'react-router-dom'

class AddItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      new_node_tag: this.props.item!==undefined?this.props.item.tag:'',
      input_type:'dtmf',


      modal: false,
      postsJson: this.props.postsJson,

      chosenMessageId: this.props.item!==undefined?this.props.item.message_id:'',
      chosenSource: this.props.item!==undefined?this.props.item.message:'',
      chosenTitle:this.props.item!==undefined?this.props.item.message.title:'',

      chosenNodeId: '',
      pickedNode: !this.props.parentNode?this.props.pickedNode:this.props.parentNode,
      parentNode:this.props.parentNode,
      isPostAdded:false,

      modifier: 1,

      item_to_update:this.props.item_id,

      addingItem:this.props.itemAdding

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onRecordClick = this.onRecordClick.bind(this)
    this.onUploadClick = this.onUploadClick.bind(this)
    this.onSelect=this.onSelect.bind(this)
  }

  //Audio Recorder
  handleAudioStop(data) {
    this.setState({ audioDetails: data });
  }
  handleAudioUpload(file) {
    console.log(file);
  }
  handleReset() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    };
    this.setState({ audioDetails: reset });
  }

  onRecordClick(e) {
    e.preventDefault()
    this.setState({ isRecordOpen: !this.state.isRecordOpen });
    this.setState({ isUploadOpen: false });
  }
  onUploadClick(e) {
    e.preventDefault()
    this.setState({ isUploadOpen: !this.state.isUploadOpen });
    this.setState({ isRecordOpen: false });
  }

  //

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {

      creator: this.state.creator,
      tag: this.state.new_node_tag,
      message:this.state.chosenMessageId,
      parent:this.state.pickedNode.node_id,
      input_type:this.state.input_type

    }

    this.props.createPost(post);
    this.props.addingItem()
  }
  onUpdate(e) {
    e.preventDefault();

    

    const post = {

      modifier: this.state.modifier,
      tag: this.state.new_node_tag,
      message:this.state.chosenMessageId,
      parent:this.state.pickedNode.node_id,
      input_type:this.state.input_type,
      updating:1,
      id:this.state.item_to_update

    }


    this.props.createPost(post);
    this.props.addingItem()
  }

  componentDidMount() {
    const { fetchPosts, fetchPostsJson, fetchMessages, pickNode } = this.props
    
    fetchPosts()
    fetchPostsJson()
    fetchMessages()

    if(!this.props.item){
      this.setState({
        pickedNode:{},
        
      })
    }


  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.pickedNode !== prevProps.pickedNode) {
      this.setState({
        pickedNode: this.props.pickedNode,
        modalIVR: false,
      })
    }
    if (this.props.itemAdding !== prevProps.itemAdding) {
      this.setState({
        addingItem:this.props.itemAdding
      })
    
    }

    
  }

  //Modal message
  onMessageToggle() {
    this.setState({
      modalMessage: !this.state.modalMessage
    })
  }

  //Modal IVR node
  onIVRToggle() {
    this.setState({
      modalIVR: !this.state.modalIVR
    })
  }

  // Select Message
  onSelect(item) {
    this.setState({
      modalMessage: !this.state.modalMessage,
      chosenSource:item

    })
    
  }
  //
  render() {

    const messagesToChoose = this.props.messages.map((item, index) => (
      chosenMessageId === item.id ? '' : <Message editing={false} key={item.id} item={item} index={index} hideFooter={true} size='12' className="post-choose" onClick={() => this.onSelect(item)}></Message>
    ))

    // Modal message

    const { item, postsJson } = this.props;
    const { modalMessage, chosenMessageId, modalIVR, chosenTitle, chosenSource, pickedNode, addingItem } = this.state;

    if (!this.props.item) {
      return (
        <Fragment>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="TabsAnimation"
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}>
            <div>

              <Form onSubmit={this.onSubmit}>
                <Row>
                  <Col lg='9' className="mb-2">
                    <Card>
                      <CardBody>
                        {Object.entries(pickedNode).length === 0 ? <Row className="select-pop-container">
                          <Col lg="12" className="select-pop" onClick={() => this.onIVRToggle()}>
                            Click to select IVR Node Parent
                          </Col>
                          <Col lg="12" className="select-footer"></Col>
                        </Row> :
                          <Fragment>
                            <FormGroup>
                              <Col lg="6">
                                <Label for="name">Parent IVR Node</Label>
                                <Input bsSize="6" type="hidden" name="plchlder" />
                              </Col>

                            </FormGroup>
                            <PostThumb size="6" node={pickedNode} className='chosenThumb' ></PostThumb>
                            <div className="change-msg col-lg-6" onClick={() => this.onIVRToggle()}> Change Parent Node </div>
                          </Fragment>
                        }
                      </CardBody>
                    </Card>
                  </Col>
                  {Object.entries(pickedNode).length === 0 ? '' :
                    <Col lg='9' className="mb-2">
                      <Card>
                        <CardBody>
                          <FormGroup>
                            <Col lg="6">
                              <Label for="name">New Node Tag</Label>
                              <Input bsSize="6" type="text" name="new_node_tag" onChange={this.onChange} placeholder="Eg: Covid Prevention methods" required />
                            </Col>

                          </FormGroup>
                        </CardBody>

                      </Card>

                    </Col>}
                  <Col lg='9' className="mb-2">
                    <Card>
                      <CardBody>
                        {!chosenSource ? <Row className="select-pop-container">
                          <Col lg="12" className="select-pop" onClick={() => this.onMessageToggle()}>
                            Click to select Message
                          </Col>
                          <Col lg="12" className="select-footer"></Col>
                        </Row> :
                          <Fragment>
                            <Col lg="6">
                                <Label for="name">IVR Message Content</Label>
                                <Input bsSize="6" type="hidden" name="plchlder" />
                              </Col>
                            <Row>
                              <Thumb size="9" id={chosenMessageId} item={chosenSource} className='chosenThumb' ></Thumb>
                            </Row><div className="change-msg" onClick={() => this.onMessageToggle()}> Change message </div>
                          </Fragment>
                        }

                      </CardBody>

                    </Card>

                  </Col>
                </Row>
                <Row>
                  <Col lg='6' className="action-btns">
                    <FormGroup>
                      {addingItem === "not-adding" ? <Button>Post</Button> : <div></div>}
                      {addingItem=== "adding" ? <Button variant="primary" disabled> Posting...</Button> : <div></div>}
                      {addingItem=== "added" ? <Button className="btn btn-success" disabled> Posted Successfully</Button>  : <div></div>}
                      {addingItem === "not-added" ? <FormFeedback tooltip>Posting failed, Something is wrong!</FormFeedback> : <div></div>}
                    </FormGroup>

                  </Col>
                </Row>

              </Form>
            </div>
            <Modal isOpen={modalMessage} toggle={() => this.onMessageToggle()} size="lg" >
              <ModalHeader toggle={() => this.onMessageToggle()}>Choose Message</ModalHeader>
              <ModalBody className="modalBody">
                {messagesToChoose}
              </ModalBody>

            </Modal>

            <Modal isOpen={modalIVR} toggle={() => this.onIVRToggle()} size="lg" >
              <ModalHeader toggle={() => this.onIVRToggle()}>Choose IVR Node</ModalHeader>
              <ModalBody className="modalBody">
                <Tree data={postsJson} ></Tree>
              </ModalBody>

            </Modal>

          </ReactCSSTransitionGroup>
        </Fragment>

      );
    }
    //console.log(parentNode)
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}>
          <div>

            <Form onSubmit={this.onUpdate}>
              <Row>
                <Col lg='9' className="mb-2">
                  <Card>
                    <CardBody>
                  
                        <Fragment>
                          <FormGroup>
                            <Col lg="6">
                              <Label for="name">Parent IVR Node</Label>
                              <Input bsSize="6" type="hidden" name="plchlder" />
                            </Col>

                          </FormGroup>
                          <PostThumb size="6" node={pickedNode} className='chosenThumb' ></PostThumb>
                          <div className="change-msg col-lg-6" onClick={() => this.onIVRToggle()}> Change Parent Node </div>
                        </Fragment>
                      
                    </CardBody>
                  </Card>
                </Col>
                
                  <Col lg='9' className="mb-2">
                    <Card>
                      <CardBody>
                        <FormGroup>
                          <Col lg="6">
                            <Label for="name">Edit Node Tag</Label>
                            <Input bsSize="6" type="text" name="new_node_tag" onChange={this.onChange} value={this.state.new_node_tag} placeholder="Eg: Welcome Message" required />
                          </Col>

                        </FormGroup>
                      </CardBody>

                    </Card>

                  </Col>
                <Col lg='9' className="mb-2">
                  <Card>
                    <CardBody>
                      {chosenMessageId === '' ? <Row className="select-pop-container">
                        <Col lg="12" className="select-pop" onClick={() => this.onMessageToggle()}>
                          Click to select Message
                        </Col>
                        <Col lg="12" className="select-footer"></Col>
                      </Row> :
                        <Fragment>
                          <Col lg="6">
                                <Label for="name">IVR Message Content</Label>
                                <Input bsSize="6" type="hidden" name="plchlder" />
                              </Col>
                          <Row>
                            <Thumb size="9" id={chosenMessageId} item={chosenSource} className='chosenThumb' ></Thumb>
                          </Row><div className="change-msg" onClick={() => this.onMessageToggle()}> Change message </div>
                        </Fragment>
                      }

                    </CardBody>

                  </Card>

                </Col>
              </Row>
              <Row>
                <Col lg='6' className="action-btns">
                  <FormGroup>
                    {addingItem === "not-adding" ? <Button>Update</Button> : <div></div>}
                    {addingItem=== "adding" ? <Button variant="primary" disabled> Updating...</Button> : <div></div>}
                    {addingItem=== "added" ? <Button className="btn btn-success" disabled> Updated Successfully</Button>  : <div></div>}
                    {addingItem === "not-added" ? <FormFeedback tooltip>Updated failed, Something is wrong!</FormFeedback> : <div></div>}
                  </FormGroup>

                </Col>
              </Row>

            </Form>
          </div>
          <Modal isOpen={modalMessage} toggle={() => this.onMessageToggle()} size="lg" >
            <ModalHeader toggle={() => this.onMessageToggle()}>Choose Message</ModalHeader>
            <ModalBody className="modalBody">
              {messagesToChoose}
            </ModalBody>

          </Modal>

          <Modal isOpen={modalIVR} toggle={() => this.onIVRToggle()} size="lg" >
            <ModalHeader toggle={() => this.onIVRToggle()}>Choose IVR Node</ModalHeader>
            <ModalBody className="modalBody">
              <Tree data={postsJson} ></Tree>
            </ModalBody>

          </Modal>

        </ReactCSSTransitionGroup>
      </Fragment>

    );

  }
}

const mapStateToProps = state => ({
  postsJson: state.posts.postsJson || [],
  posts: state.posts.items || [],
  messages: state.messages.items.filter(item=> item.approved===1),
  itemAdding: state.posts.addingItem,
  pickedNode: state.posts.pickedNode,
  isModalOpen: state.posts.isModalOpen,
  user: state.auth.user
})

export default connect(mapStateToProps, { fetchMessages, fetchPosts, fetchPostsJson, pickNode,addingItem,createPost })(AddItemForm);