import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import en from "../locales/en";
import pt from "../locales/pt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const albums = [
  {
    slug: 'apocrifo',
    title: 'Apócrifo',
    year: '2025',
    cover: '/apocrifo.webp',
    descKey: 'project_apocrifo_description',
    spotify: 'https://open.spotify.com/intl-pt/album/7f6j7qX2niKWEy8Dj2j2KC',
    youtube: 'https://www.youtube.com/watch?v=kFAADs6kYSc',
  },
  {
    slug: 'tempos-e-lugares',
    title: 'Tempos e Lugares',
    year: '2022',
    cover: '/tempos_e_lugares.webp',
    descKey: 'project_tl_description',
    spotify: 'https://open.spotify.com/album/48nwdW8KUjJyePnTBVtxiT',
    youtube: 'https://www.youtube.com/watch?v=eRudKpMv_SI',
  },
  {
    slug: 'grey-city',
    title: 'Grey City',
    year: '2019',
    cover: '/grey_city.webp',
    descKey: 'project_one_description',
    spotify: 'https://open.spotify.com/intl-pt/album/28yXED1dOLIQXf9EObeLdx',
    youtube: 'https://www.youtube.com/watch?v=TWfs4cmC5ek&t=1s',
  },
  {
    slug: 'palavra-de-fantoche',
    title: 'Palavra de Fantoche',
    year: '2016',
    cover: '/palavra_de_fantoche.jpeg',
    descKey: 'project_two_description',
    spotify: 'https://open.spotify.com/intl-pt/artist/0TtNm2GzxTYki2zQTLOiVE',
    youtube: 'https://www.youtube.com/watch?v=35a8X_A1mPA&list=RD35a8X_A1mPA&start_radio=1',
  },
];

export default function DiscographySection() {
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;

  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedAlbum) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedAlbum]);

  return (
    <section className="discography-section" ref={sectionRef}>
      <Container>
        <h2 className="section-title">{t.discography}</h2>

        <Row>
          {albums.map((album, index) => (
            <Col key={album.slug} xs={6} md={3}>
              <div
                className={`album-item ${active ? 'active' : ''}`}
                style={{ transitionDelay: `${index * 180}ms` }}
              >
                <button
                  className="album-link"
                  onClick={() => setSelectedAlbum(album)}
                  aria-label={`Abrir informações de ${album.title}`}
                >
                  <div className="album-card">
                    <div className="album-cover-wrapper">
                      <img
                        src={album.cover}
                        alt={album.title}
                        className="album-cover"
                      />
                    </div>
                    <div className="album-meta">
                      <h3>{album.title}</h3>
                      <span>{album.year}</span>
                    </div>
                  </div>
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* MODAL */}
      {selectedAlbum && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedAlbum(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedAlbum(null)}
              aria-label="Fechar"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="modal-inner">
              <img
                src={selectedAlbum.cover}
                alt={selectedAlbum.title}
                className="modal-cover"
              />
              <div className="modal-info">
                <p className="modal-year">{selectedAlbum.year}</p>
                <h2 className="modal-title">{selectedAlbum.title}</h2>
                <p className="modal-desc">{t[selectedAlbum.descKey]}</p>

                {(selectedAlbum.spotify || selectedAlbum.youtube) && (
                  <div className="modal-links">
                    {selectedAlbum.spotify && (
                      <a
                        href={selectedAlbum.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-link spotify"
                        aria-label="Ouvir no Spotify"
                      >
                        <FontAwesomeIcon icon={faSpotify} />
                        <span>Spotify</span>
                      </a>
                    )}
                    {selectedAlbum.youtube && (
                      <a
                        href={selectedAlbum.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-link youtube"
                        aria-label="Ver no YouTube"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                        <span>YouTube</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .discography-section {
          padding: 6rem 0;
          background: transparent;
        }

        .section-title {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 600;
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #f2e9ea;
        }

        .album-item {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.8s ease,
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .album-item.active {
          opacity: 1;
          transform: translateY(0);
        }

        .album-link {
          background: none;
          border: none;
          padding: 0;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }

        .album-card {
          transition: transform 0.4s ease;
        }

        .album-card:hover {
          transform: translateY(-12px);
        }

        .album-cover-wrapper {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 18px 32px rgba(0, 0, 0, 0.35);
        }

        .album-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .album-meta {
          margin-top: 1rem;
        }

        .album-meta h3 {
          font-family: 'Oswald', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #f2e9ea;
        }

        .album-meta span {
          font-size: 0.85rem;
          color: #b8aeb0;
        }

        /* ── MODAL ── */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal-box {
          position: relative;
          background: rgba(20, 5, 10, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          animation: modalIn 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: #f2e9ea;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          z-index: 1;
          transition: background 0.2s;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.18);
        }

        .modal-inner {
          display: flex;
          gap: 2rem;
          padding: 2rem;
        }

        .modal-cover {
          width: 180px;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
          flex-shrink: 0;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
        }

        .modal-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .modal-year {
          font-size: 0.8rem;
          color: #b8aeb0;
          margin: 0 0 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .modal-title {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #f2e9ea;
          margin: 0 0 1rem;
        }

        .modal-desc {
          font-size: 0.88rem;
          line-height: 1.65;
          color: #b8aeb0;
          margin: 0 0 1.5rem;
        }

        .modal-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .modal-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
        }

        .modal-link:hover {
          opacity: 0.85;
          transform: scale(1.04);
        }

        .modal-link.spotify {
          background: #1db954;
          color: #000;
        }

        .modal-link.youtube {
          background: #ff0000;
          color: #fff;
        }

        /* mobile */
        @media (max-width: 540px) {
          .modal-inner {
            flex-direction: column;
            align-items: center;
            padding: 1.5rem 1.25rem;
            text-align: center;
          }

          .modal-cover {
            width: 140px;
            height: 140px;
          }

          .modal-links {
            justify-content: center;
          }
        }

        @media (max-width: 860px) {
          .discography-section {
            padding: 3rem 0;
          }
        }
      `}</style>
    </section>
  );
}
