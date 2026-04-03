import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import en from "../locales/en";
import pt from "../locales/pt";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about"
      ref={sectionRef}
      className={`about latest-album ${visible ? "is-visible" : ""}`}
    >
      <Container>
        <Row className="align-items-center">
          {/* IMAGEM */}
          <Col lg={6} className="image-col">
            <div className="album-image">
              <img src="/augusto_baschera_2.JPG" alt="Augusto Baschera" />
            </div>
          </Col>

          {/* TEXTO */}
          <Col lg={6}>
            <div className="album-content">
              <p>{t.about}</p>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        /* SECTION BASE */
        .latest-album {
          padding: 6rem 0;
          background: transparent;
          overflow: hidden;
        }

        /* IMAGE */
        .album-image {
          display: flex;
          justify-content: center;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .album-image img {
          width: 100%;
          max-width: 500px;
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.25);
        }

        /* CONTENT */
        .album-content {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s;
        }

        .album-content h2 {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          color: #ffffff;
        }

        .album-content p {
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 520px;
          margin-bottom: 2rem;
          color: #cbcbcb;
        }

        /* ANIMATION ACTIVE */
        .latest-album.is-visible .album-image,
        .latest-album.is-visible .album-content {
          opacity: 1;
          transform: translateY(0);
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .latest-album {
            padding: 4rem 0;
          }

          .image-col {
            margin-bottom: 3rem;
          }

          .album-content {
            text-align: center;
          }

          .album-content p {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}
