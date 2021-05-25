import React, { Fragment } from 'react';

import {
  Card, CardBody, Row, Col,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button,
} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import { createMessage, addingItem, uploadFile, uploadRecording, fetchMessages } from '../../../../actions/messageActions';
import { faCheckCircle, faCross, faEdit, faMicrophone, faPencilAlt, faShare, faShareAlt, faTimes, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Recorder } from '../../../../react-voice-recorder'
import '../../../../react-voice-recorder/dist/index.css'
import { add } from 'date-arithmetic';

class AddItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      upload_input: '',
      upload_filename: this.props.item!==undefined?this.props.item.speech:'',
      message_title: this.props.item!==undefined?this.props.item.title:'',
      message_text_en: this.props.item!==undefined?this.props.item.text:'',
      message_text_rw: this.props.item!==undefined?this.props.item.text_rw:'',
      creator: this.props.item !== undefined ? this.props.item.creator : this.props.user.id,
      modifier: this.props.user.id,
      item_id: this.props.item!==undefined?this.props.item.id:'',


      isRecordOpen: false,
      isUploadOpen: false,
      isEditAudioOpen:true,

      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      },

      addingItem: this.props.itemAdding





    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onRecordClick = this.onRecordClick.bind(this)
    this.onUploadClick = this.onUploadClick.bind(this)
    this.onRecordToggle = this.onRecordToggle.bind(this)
    this.handleOnFileChange = this.handleOnFileChange.bind(this);
  }

  //Audio Recorder
  handleAudioStop(data) {
    console.log(data)
    this.setState({ audioDetails: data });

    const recordData = new FormData();
    setTimeout(function () { //Start the timer
      recordData.append('file', this.state.audioDetails.blob)
      console.log(this.state.audioDetails.url.split('/')[3])
      recordData.append('filename', this.state.audioDetails.url.split('/')[3])
      this.props.uploadRecording(recordData)
      this.setState({ upload_filename: this.state.audioDetails.url.split('/')[3] + '.ogg' })
    }.bind(this), 2000)



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
    this.setState({ audioDetails: reset, upload_filename: '' });
  }

  //

  onRecordClick(e) {
    e.preventDefault()
    this.setState({
      isRecordOpen: !this.state.isRecordOpen,
      isUploadOpen: false,
      upload_input: '', upload_filename: ''
    });

  }
  onUploadClick(e) {
    e.preventDefault()
    this.setState({
      isUploadOpen: !this.state.isUploadOpen,
      isRecordOpen: false,
      upload_input: '', upload_filename: ''
    });

  }

  
  onRecordToggle(e) {
    e.preventDefault()
    
    this.setState({
      isEditAudioOpen: !this.state. isEditAudioOpen,
    });

  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const message = {

      upload_filename: this.state.upload_filename,
      message_text_en: this.state.message_text_en,
      message_text_rw: this.state.message_text_rw,
      creator: this.state.creator,
      chosenTitle: this.state.message_title
    }

    this.props.createMessage(message);

    this.props.addingItem()
  }

  onUpdate(e) {
    e.preventDefault();

    const message = {

      upload_filename: this.state.upload_filename,
      message_text_en: this.state.message_text_en,
      message_text_rw: this.state.message_text_rw,
      creator: this.state.creator,
      modifier:this.state.modifier,
      chosenTitle: this.state.message_title,
      updating:1,
      id:this.state.item_id
    }

    this.props.createMessage(message);

    this.props.addingItem()
  }
  handleOnFileChange = (e) => {
    e.preventDefault

    const data = new FormData();
    data.append('file', e.target.files[0]);

    console.log(e.target.files[0].name)

    this.setState({
      [e.target.name]: data,
      upload_filename: e.target.files[0].name
    })
    this.props.uploadFile(data)

  }

  componentDidMount() {
    const { fetchMessages } = this.props

  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    if (this.props.itemAdding !== prevProps.itemAdding) {
      this.setState({
        addingItem: this.props.itemAdding
      })

    }
  }

  render() {

    const { addingItem,isEditAudioOpen,isRecordOpen,isUploadOpen } = this.state;
    const { item, item_id } = this.props;
    

    if (!item) {
      
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
                  {/* <Col lg='9' className="mb-2">
                    <Card>
                      <CardBody>
                        <FormGroup>
                          <Label for="msg-title">Message Title</Label>
                          <Input type="text" name="message_title" id="messageTitle" onChange={this.onChange} placeholder="A very short description (max. 50 letters)" required />
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </Col> */}
                  <Col lg='9' className="mb-2">
                    <Card>
                      <CardBody>
                        <FormGroup>
                          <Label for="msg-text">Message Text (English)</Label>
                          <Input type="textarea" name="message_text_en" id="messageTextEn" onChange={this.onChange} placeholder="Actual message" required />
                        </FormGroup>
                        <FormGroup>
                          <Label for="msg-text">Message Text (Kinyarwanda)</Label>
                          <Input type="textarea" name="message_text_rw" id="messageTextRw" onChange={this.onChange} placeholder="Actual message in Kinyarwanda" required />
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg='9' className="mb-3">
                    <Card>
                      <CardBody>
                        <Row>
                          {isRecordOpen || isUploadOpen ? '' :
                            <Col lg="12" className="audio-btns">
                              <Button type="button" color="info" className="ml-2" onClick={this.onRecordClick}><FontAwesomeIcon className="mr-2 ml-1" icon={faMicrophone} />Record Voice</Button>
                              <Button type="button" color="info" className="ml-2" onClick={this.onUploadClick}><FontAwesomeIcon className="mr-2 ml-1" icon={faUpload} />Upload Audio</Button>
                            </Col>}
                          {isUploadOpen ?
                            <Col lg="12" className="audio-options">
                              <FormGroup>
                                <Label for="uploadAudio">Select Audio File</Label>
                                <Input type="file" name="upload_input" accept='audio/mp3' className="mt-3" onChange={this.handleOnFileChange} />
                                <FormText color="muted" className="mt-3">
                                  Upload an audio file from your file system. If you cannot find it,Click Cancel and record your voice instead.
                                </FormText>
                              </FormGroup>
                              <Button type="button" color="info" className="mt-2" onClick={this.onUploadClick}><FontAwesomeIcon className="mr-2 ml-1" icon={faTimes} />Cancel</Button>
                            </Col> : ''}
                          {isRecordOpen ?
                            <Col lg="12" className="audio-options">
                              <Recorder
                                record={true}
                                title={"New recording"}
                                audioURL={this.state.audioDetails.url}
                                showUIAudio
                                handleAudioStop={data => this.handleAudioStop(data)}
                                handleAudioUpload={data => this.handleAudioUpload(data)}
                                handleReset={() => this.handleReset()}
                              />
                              <Button type="button" color="info" className="mt-2" onClick={this.onRecordClick}><FontAwesomeIcon className="mr-2 ml-1" icon={faTimes} />Cancel</Button>
                            </Col> : ''}
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col lg='6' className="action-btns">
                    <FormGroup>
                      {addingItem === "not-adding" ? <Button>Submit For Review</Button> : <div></div>}
                      {addingItem === "adding" ? <Button className="btn btn-warning" disabled> Submitting...</Button> : <div></div>}
                      {addingItem === "added" ? <Button className="btn btn-success" disabled> Submitted Successfully</Button> : <div></div>}
                      {addingItem === "not-added" ? <FormFeedback tooltip>Message not submitted, Something is wrong!</FormFeedback> : <div></div>}
                    </FormGroup>
                    {/* <FormGroup>
                      <Button className="ml-2">Save For Later</Button>
                    </FormGroup> */}
                  </Col>
                </Row>

              </Form>
            </div>
          </ReactCSSTransitionGroup>
        </Fragment>

      );
    }
    else {
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
                  {/* <Col lg='9' className="mb-2">
                    <Card>
                      <CardBody>
                        <FormGroup>
                          <Label for="msg-title">Message Title</Label>
                          <Input type="text" name="message_title" id="messageTitle" onChange={this.onChange} value={this.state.message_title}  required />
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </Col> */}
                  <Col lg='9' className="mb-2">
                    <Card>
                      <CardBody>
                        <FormGroup>
                          <Label for="msg-text">Message Text (English)</Label>
                          <Input type="textarea" name="message_text_en" id="messageText" onChange={this.onChange} value={this.state.message_text_en} placeholder="Actual message" required />
                        </FormGroup>
                        <FormGroup>
                          <Label for="msg-text">Message Text (Kinyarwanda)</Label>
                          <Input type="textarea" name="message_text_rw" id="messageText" onChange={this.onChange} value={this.state.message_text_rw} placeholder="Actual message" required />
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg='9' className="mb-3">
                    <Card>
                      <CardBody>
                      {isEditAudioOpen ?
                        <Row>
                          <Col lg="9"><Label for="uploadAudio">Audio (Kinyarwanda)</Label></Col>
                          <Col lg="9"> <audio src={'http://localhost:8000/static/uploads/'+item.speech} type="audio/mpeg" controls/></Col>
                          <Col lg="6"><div className="change-msg" onClick={this.onRecordToggle}> Change Audio </div></Col>
                        </Row>:''
                        }
                        <Row>
                      
                          {isEditAudioOpen || isRecordOpen || isUploadOpen ? '' :
                            <Col lg="12" className="audio-btns">
                              <Button type="button" color="info" className="ml-2" onClick={this.onRecordClick}><FontAwesomeIcon className="mr-2 ml-1" icon={faMicrophone} />Record Voice</Button>
                              <Button type="button" color="info" className="ml-2" onClick={this.onUploadClick}><FontAwesomeIcon className="mr-2 ml-1" icon={faUpload} />Upload Audio</Button>
                            </Col>}
                          {isUploadOpen ?
                            <Col lg="12" className="audio-options">
                              <FormGroup>
                                <Label for="uploadAudio">Select Audio File</Label>
                                <Input type="file" name="upload_input" accept='audio/mp3' className="mt-3" onChange={this.handleOnFileChange} />
                                <FormText color="muted" className="mt-3">
                                  Upload an audio file from your file system. If you cannot find it,Click Cancel and record your voice instead.
                                </FormText>
                              </FormGroup>
                              <Button type="button" color="info" className="mt-2" onClick={this.onUploadClick}><FontAwesomeIcon className="mr-2 ml-1" icon={faTimes} />Cancel</Button>
                            </Col> : ''}
                          {isRecordOpen ?
                            <Col lg="12" className="audio-options">
                              <Recorder
                                record={true}
                                title={"New recording"}
                                audioURL={this.state.audioDetails.url}
                                showUIAudio
                                handleAudioStop={data => this.handleAudioStop(data)}
                                handleAudioUpload={data => this.handleAudioUpload(data)}
                                handleReset={() => this.handleReset()}
                              />
                              <Button type="button" color="info" className="mt-2" onClick={this.onRecordClick}><FontAwesomeIcon className="mr-2 ml-1" icon={faTimes} />Cancel</Button>
                            </Col> : ''}
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col lg='6' className="action-btns">
                    <FormGroup>
                      {addingItem === "not-adding" ? <Button>Submit For Review</Button> : <div></div>}
                      {addingItem === "adding" ? <Button className="btn btn-warning" disabled> Submitting...</Button> : <div></div>}
                      {addingItem === "added" ? <Button className="btn btn-success" disabled> Submitted Successfully</Button> : <div></div>}
                      {addingItem === "not-added" ? <FormFeedback tooltip>Message not submitted, Something is wrong!</FormFeedback> : <div></div>}
                    </FormGroup>
                    {/* <FormGroup>
                      <Button className="ml-2">Save For Later</Button>
                    </FormGroup> */}
                  </Col>
                </Row>

              </Form>
            </div>
          </ReactCSSTransitionGroup>
        </Fragment>

      );
    }

  }
}

const mapStateToProps = state => ({
  itemAdding: state.messages.addingItem,
  messages:state.messages.items,
  user: state.auth.user
})

export default connect(mapStateToProps, { createMessage, uploadFile, uploadRecording, addingItem , fetchMessages})(AddItemForm);