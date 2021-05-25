import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

const ModalTemplate = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(false);
  
    const toggle = () => setModal(!modal);
    const changeUnmountOnClose = e => {
        let value = e.target.value;
        setUnmountOnClose(JSON.parse(value));
    }
  
    return (
        <div>
            
            <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalTemplate;