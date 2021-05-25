import React from 'react';
import {
    Row, Col,
    Card, CardImg, CardText, CardBody, Modal,ModalBody,ModalFooter,ModalHeader,
    CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter, UncontrolledTooltip, Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { faCheckCircle, faEdit, faPaperPlane, faPencilAlt, faQuestion, faShare, faShareAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal:false
        };
    
        this.onUpdate = this.onUpdate.bind(this);
        this.onToggle=this.onToggle.bind(this)
        
      }

    onUpdate(id) {
        window.location.assign("#/messages/update-message/" + id)
    }
    onToggle() {
        this.setState({
          modal: !this.state.modal
        })
    }
    render() {

        const { editing,item,size,hideFooter, className, onClick } = this.props;


        return (
            <Col lg={size} className={className} onClick={onClick}>
                <Card className="main-card mb-2">
                    <CardBody>
                        {/* <CardTitle>Message title: {item.title}</CardTitle> */}
                        <CardTitle>Text (English)</CardTitle>
                        <p className="msg-text">{item.temp_text}</p>
                        <CardTitle>Text (Kinyarwanda)</CardTitle>
                        <p className="msg-text">{item.temp_text_rw}</p>
                        <CardTitle>Audio (Kinyarwanda)</CardTitle>
                        <audio src={'http://localhost:8000/static/uploads/'+item.speech} type="audio/mpeg" controls/>

                        {hideFooter ? "" : <CardFooter >
                            {item.approved===1&&item.approver?<span><b className="mr-2">Approved by: </b><span className="name-tag">{item.approver}</span> </span>:''}
                            <Button color="info" className="first-btn" onClick={() => this.onUpdate(item.id)}><FontAwesomeIcon className="mr-1 ml-1" icon={faPencilAlt} /> Edit</Button>
                            <Button color="info" className="ml-2"><FontAwesomeIcon className="mr-1 ml-1" icon={faShareAlt} id="Tooltip-3"/> Share</Button>
                            {editing===true&&item.approved===0?<Button color="info" className="mr-1 ml-1" disabled><FontAwesomeIcon className="mr-1 ml-1" icon={faCheckCircle} id="Tooltip-2" /> Pending Approval</Button>:''}
                            {editing===true&&item.approved===2?<Button color="danger" className="mr-1 ml-1" onClick={this.onToggle} ><FontAwesomeIcon className="mr-1 ml-1" icon={faTimesCircle} id="Tooltip-2" /> Rejected. Click to See Why</Button>:''}
                            {editing===false?<Button color="info" className="ml-2"><FontAwesomeIcon className="mr-1 ml-1" icon={faPaperPlane} id="Tooltip-2" /> Post</Button>:''}

                
                            <UncontrolledTooltip placement="bottom" target={'Tooltip-3'}>
                                Share to your colleagues
                                </UncontrolledTooltip>
                        </CardFooter>}
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={() => this.onToggle()} >
                    <ModalHeader toggle={() => this.onToggle()}>Reason for Message Rejection</ModalHeader>
                    <ModalBody>
                            <p>{item.reject_reason}</p>
                    </ModalBody>
                    <ModalFooter>
                      {item.approver?<span>Rejected by <span className="name-tag">{item.approver}</span></span>:''} 
                    </ModalFooter>
                </Modal>
            </Col>




        );
    }
}



export default connect(null, null)(Message);