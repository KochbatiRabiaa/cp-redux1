import React, {useState} from "react";
import { Modal, Button, Form, FormLabel, FormGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import '../Editing/editing.css'

const Editing = (currentTaskId) => {
 
  const [editedTask, setEditedTask] = useState({editedTaskId:'',editedTaskText:''});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  let dispatch = useDispatch();
  const saveChange = () => {
    if (editedTask.editedTaskText.trim()) {
      dispatch({ type: "edite", payloadId:editedTask.editedTaskId,payloadText:editedTask.editedTaskText });
      handleClose();
    }
  };
  return (
    <div>
      <div>
        <Button
        className="editetask"
          variant="outline-dark"
          
          onClick={handleShow}
        >
           Edite
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edite Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup>
            <FormLabel>Edite Task</FormLabel>
            <Form.Control 
              size="sm"
              type="text"
              placeholder=""
              onChange={(e) =>  setEditedTask({...editedTask, editedTaskId:currentTaskId,editedTaskText:e.target.value})
              }
            />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={saveChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Editing;
