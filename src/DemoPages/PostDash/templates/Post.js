import React from 'react';
import {
    Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter, UncontrolledTooltip, Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { faCheckCircle, faEdit, faPaperPlane, faPencilAlt, faShare, faShareAlt, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deletePost} from '../../../actions/postActions';
import { Fragment } from 'react';


class Post extends React.Component {

    constructor(props) {
        super();

        this.state={
            deleteConfirm:false,
        }
        
        this.handleInitialDeleteClick = this.handleInitialDeleteClick.bind(this);
        this.handleConfirmDeleteClick = this.handleConfirmDeleteClick.bind(this);
        this.onCancelDelete=this.onCancelDelete.bind(this)
        
    }

    onUpdate(id) {
        window.location.assign("#/posts/my-posts/update-post/"+ id)
    }

    handleInitialDeleteClick(e){
        e.preventDefault()
        this.setState({
            deleteConfirm:true,
          })
    }

    handleConfirmDeleteClick(e){
        e.preventDefault()
        const post={
            modifier:1,
            id:this.props.item.id,

        }
        this.props.deletePost(post)

        this.setState({
            deleteConfirm:false,
        })
        
    }
    onCancelDelete(e){
        e.preventDefault()
        console.log("arrived")
        this.setState({
            deleteConfirm:false,
        })
    }

    
    render() {

        const { editing, size, hideFooter, className,onClick,item} = this.props;
        const{deleteConfirm}=this.state;
        if (hideFooter == null)
            hideFooter == false
        


        return (
            <Col lg={size} className={className} onClick={onClick}>
                <Card className="main-card mb-2">
                    <CardBody>
                        <CardTitle> Node ID: {item.node_id}</CardTitle>
                        <p><b>Tag: </b>{item.tag}</p>
                        <p><b>Input Type: </b>{item.input_type}</p>
                        <CardTitle>Message</CardTitle>
                        <audio src={'http://localhost:8000/static/uploads/'+item.message.speech} type="audio/mpeg" controls/>
                        {hideFooter ? "" : <CardFooter >
                           
                            
                            {deleteConfirm ? 
                            <Fragment>
                                <Button color="info" className="first-btn" onClick={this.onCancelDelete}><FontAwesomeIcon className="mr-1 ml-1" icon={faTimes} /> Cancel</Button>
                                <Button color="danger" className="ml-2  delete-confirm" onClick={this.handleConfirmDeleteClick}><FontAwesomeIcon className="mr-1 ml-1" icon={faTrash} /> Confirm Delete</Button>
                            </Fragment>
                            :
                            <Fragment>
                                 <Button color="info" className="first-btn" onClick={() => this.onUpdate(item.id)}><FontAwesomeIcon className="mr-1 ml-1" icon={faPencilAlt} /> Edit</Button>
                                 <Button color="info" className="ml-2" onClick={this.handleInitialDeleteClick}><FontAwesomeIcon className="mr-1 ml-1" icon={faTrash} /> Delete</Button>
                            </Fragment>
                            
                            }

                        </CardFooter>}
                    </CardBody>
                </Card>
            </Col>

        );
    }
}



export default connect(null, {deletePost})(Post);