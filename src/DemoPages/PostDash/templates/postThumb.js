import React from 'react';
import {
    Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter, UncontrolledTooltip, Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { faCheckCircle, faEdit, faPaperPlane, faPencilAlt, faShare, faShareAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { node } from 'prop-types';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

class PostThumb extends React.Component {

    render() {


        const { editing, size, hideFooter, className, onClick, id, audio, node } = this.props;
        if (hideFooter == null)
            hideFooter == false

        const btnClick = e => {
            e.preventDefault()
            location.replace("#/posts/my-posts/update-post/" + node.id + "/")
        }
        return (
            <Col lg={size} className={className} onClick={onClick}>
                {node.node_id == 0 ?
                    <CardBody>
                        IVR Root
                        </CardBody> :

                    <CardBody>
                        <CardTitle>{node.tag}</CardTitle>
                        {/* <CardTitle>Audio</CardTitle>

                        <audio src={'http://localhost:8000/static/uploads/' + node.message.speech} controls /> */}

                        <Button color="" className="first-btn" onClick={btnClick}><FontAwesomeIcon className="mr-1 ml-1" icon={faPencilAlt} /> Edit This Node</Button> 

                    </CardBody>
                }


            </Col>




        );
    }
}



export default connect(null, null)(PostThumb);