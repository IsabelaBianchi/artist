import { Modal, Figure } from "react-bootstrap";

export function PhotoModal(props) {

  return (
    <>
      <Modal {...props} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="modal-dialog-centered"
        >
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
    
          <Figure className="">
            <Figure.Image
            
              alt={props.photo}
              src={props.photo}
            />
          </Figure>
        </Modal.Body>
      </Modal>
    </>
  );
}