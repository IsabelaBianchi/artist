import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "next/image"; // Importando o Image do Next.js

function MyModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleShow();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My New Album is Out NOW!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src="/apocrifo.webp"
            alt="My New Album"
            width={500}
            height={500}
            layout="responsive"
            priority
          />
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
