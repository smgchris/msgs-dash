import React from 'react';
import {
    Row, Col,
    Card, CardImg, CardText, CardBody, Modal,ModalBody,ModalFooter,ModalHeader,
    CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter, UncontrolledTooltip, Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { faCheckCircle, faCross, faEdit, faPaperPlane, faPencilAlt, faShare, faShareAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createMessage, addingItem, approveMessage, unapproveMessage,rejectMessage, fetchMessages } from '../../../actions/messageActions';
import { Fragment } from 'react';

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal:false,
            decline_reason:''

        };

        this.onApprove = this.onApprove.bind(this);
        this.onUnApprove = this.onUnApprove.bind(this);
        this.onReject = this.onReject.bind(this);
        this.onToggle=this.onToggle.bind(this);
        this.onChange=this.onChange.bind(this)

    }

    onApprove(e) {
        e.preventDefault()
        this.props.addingItem()
        const data = {
            modifier: this.props.user.id,
            id: this.props.item.id

        }
        this.props.approveMessage(data)

    }
    onUnApprove(e) {
        e.preventDefault()
        this.props.addingItem()
        const data = {
            modifier: this.props.user.id,
            id: this.props.item.id

        }
        this.props.unapproveMessage(data)

    }
    onReject(e) {
        e.preventDefault()
        this.props.addingItem()
        const data = {
            modifier: this.props.user.id,
            id: this.props.item.id,
            reason:this.state.decline_reason,


        }
        this.props.rejectMessage(data)

        this.onToggle()

    }
    onToggle() {
        this.setState({
          modal: !this.state.modal
        })
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render() {

        const { editing, itemAdding, item, size, hideFooter, className, onClick } = this.props;


        return (
            <Col lg={size} className={className} onClick={onClick}>
                <Card className="main-card mb-2">
                    <CardBody>
                        {/* <CardTitle>Message title: {item.title}</CardTitle> */}
                        <CardTitle>Text (English)</CardTitle>
                        <p className="msg-text">{item.text}</p>
                        <CardTitle>Text (Kinyarwanda)</CardTitle>
                        <p className="msg-text">{item.text_rw}</p>
                        <CardTitle>Audio (Kinyarwanda)</CardTitle>
                        <audio src={'http://localhost:8000/static/uploads/' + item.speech} type="audio/mpeg" controls />

                        {hideFooter ? "" : <CardFooter >

                            <b className="mr-2">Author: </b>Dr Serge
                            {item.approved == 1 ?
                                <Fragment>
                                    <Button className="first-btn btn btn-success" disabled> Approved</Button>
                                    <Button color="info" className="ml-2" onClick={this.onUnApprove}><FontAwesomeIcon className="mr-1 ml-1" icon={faCross} id="Tooltip-2" /> Unapprove</Button>
                                </Fragment>

                                : ''}
                            {item.approved !== 1 && itemAdding === "not-adding" ? <Button color="info" className="first-btn" onClick={this.onApprove}><FontAwesomeIcon className="mr-1 ml-1" icon={faCheckCircle} id="Tooltip-2" /> Approve</Button> : <div></div>}
                            {item.approved === 2 && itemAdding === "not-adding" ? <Button color="info" className="ml-2 btn-danger" disabled><FontAwesomeIcon className="mr-1 ml-1" icon={faTimesCircle} id="Tooltip-2" /> Rejected</Button> : <div></div>}
                            {item.approved == 0 && itemAdding === "not-adding" ? <Button color="info" className="ml-2 btn-danger" onClick={this.onToggle}><FontAwesomeIcon className="mr-1 ml-1" icon={faTimesCircle} id="Tooltip-2" /> Reject</Button> : <div></div>}
                            {item.approved == 0 && itemAdding === "adding" ? <Button className="first-btn btn btn-warning" disabled> Approving...</Button> : <div></div>}
                            {item.approved == 0 && itemAdding === "added" ? <Button className="first-btn btn btn-success" disabled> Approved Successfully</Button> : <div></div>}


                        </CardFooter>}
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={() => this.onToggle()} className="">
                    <ModalHeader toggle={() => this.onToggle()}>Reason for Message Rejection</ModalHeader>
                    <ModalBody>
                        <textarea onChange={this.onChange} name="decline_reason" rows="4" cols="50" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.onReject}>Decline Request</Button>{' '}
                        <Button color="info" onClick={() => this.onToggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Col>





        );
    }
}

const mapStateToProps = state => ({
    itemAdding: state.messages.addingItem,
    user: state.auth.user
})

export default connect(mapStateToProps, { createMessage, addingItem, fetchMessages, approveMessage, unapproveMessage,rejectMessage })(Message);
