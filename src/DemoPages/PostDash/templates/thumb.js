import React from 'react';
import {
    Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter, UncontrolledTooltip, Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { faCheckCircle, faEdit, faPaperPlane, faPencilAlt, faShare, faShareAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Thumb extends React.Component {

    truncate(str) {
        if (str)
            return str.length > 80 ? str.substring(0, 79) + "..." : str;
        else
            return ''
    }


    render() {
        const btnClick = e => {
            e.preventDefault()
            location.replace("#/messages/update-message/" + item.id + "/")
        }

        const { editing, size, hideFooter, className, item, onClick, title, source } = this.props;
        if (hideFooter == null)
            hideFooter == false


        return (
            <Col lg={size} className={className} onClick={onClick}>

                <CardBody>
                    <CardTitle>Text (English)</CardTitle>
                    <p className="msg-text">{item.text}</p>
                    <CardTitle>Text (Kinyarwanda)</CardTitle>
                    <p className="msg-text">{this.truncate(item.text_rw)}</p>
                    <CardTitle>Audio (Kinyarwanda)</CardTitle>
                    <audio src={'http://localhost:8000/static/uploads/' + item.speech} type="audio/mpeg" controls />
                    <CardTitle>
                        <Button color="" className="first-btn" onClick={btnClick}><FontAwesomeIcon className="mr-1 ml-1" icon={faPencilAlt} /> Edit this Message</Button>
                    </CardTitle>


                </CardBody>


            </Col>




        );
    }
}



export default connect(null, null)(Thumb);