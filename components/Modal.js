import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "next/image"; // Importando o Image do Next.js

function MyModal() {
  const [show, setShow] = useState(false);

  // Função para abrir o modal
  const handleShow = () => setShow(true);

  // Função para fechar o modal
  const handleClose = () => setShow(false);

  // Mostrar o modal após 3 segundos
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
          {/* Usando o next/image */}
          <Image
            src="/apocrifo.webp"  // Caminho da imagem, certifique-se de que está na pasta public
            alt="My New Album"
            width={500}  // Largura da imagem (ajuste conforme necessário)
            height={500} // Altura da imagem (ajuste conforme necessário)
            layout="responsive" // Para garantir que a imagem tenha o tamanho correto
            priority // Para carregar a imagem de forma prioritária, se necessário
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
