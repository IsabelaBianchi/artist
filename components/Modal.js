import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function MyModal() {
  const [show, setShow] = useState(false);

  // Função para abrir o modal
  const handleShow = () => setShow(true);

  // Função para fechar o modal
  const handleClose = () => setShow(false);

  // Mostrar o modal após 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      handleShow();
    }, 3000);

    // Limpar o timer ao desmontar o componente
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My New Album is Out NOW!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src="apocrifo.webp" rounded className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            onClick={() => {
              handleClose(); 
              window.open(
                "https://open.spotify.com/intl-pt/album/7f6j7qX2niKWEy8Dj2j2KC?si=37YHa2QpQmmPQoGY0byINQ",
                "_blank"
              );
            }}
          >
            Listen on Spotify{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
