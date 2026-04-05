import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import en from "../locales/en";
import pt from "../locales/pt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    key: "4tet",
    cover: "/augustoquartet.PNG",
    titleKey: "quarteto_title",
    descKey: "quarteto_desc",
    coverScale: 1.4,
    youtube: "https://www.youtube.com/watch?v=kFAADs6kYSc",
  },
  {
    key: "travessia",
    cover: "/travessia.webp",
    titleKey: "project_five_tittle",
    descKey: "project_five_description",
    spotify: null,
    youtube: "https://www.youtube.com/watch?v=w1CSGxQXFyk",
  },
  {
    key: "tempos-e-lugares",
    cover: "/teatro_micaelense.jpg",
    titleKey: "project_tl_tittle",
    descKey: "project_tl_description",
    youtube: "https://www.youtube.com/watch?v=eRudKpMv_SI",
  },
  {
    key: "baschera-bernardino",
    cover: "/baschera_bernardino.webp",
    titleKey: "project_three_tittle",
    descKey: "project_three_description",
    spotify: null,
    youtube: "https://www.youtube.com/watch?v=0GCyS5c-DO4",
  },
  {
    key: "folclore",
    cover: "/folclore.jpg",
    titleKey: "project_folclore_title",
    descKey: "project_folclore_description",
    youtube: "https://www.youtube.com/watch?v=ZmOPd_NbbC8",
  },
  {
    key: "concierto-aranjuez",
    cover: "/concierto_aranjuez.png",
    titleKey: "project_four_tittle",
    descKey: "project_four_description",
    coverScale: 1.35,
    spotify: null,
    youtube: "https://www.youtube.com/watch?v=Fi-B3nDIBkI",
  },
];

export default function ProjectsGrid() {
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;

  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);
  const [expandedKey, setExpandedKey] = useState(null);
  const longPressTimer = useRef(null);

  function handleTouchStart(key) {
    longPressTimer.current = setTimeout(() => {
      setExpandedKey((prev) => (prev === key ? null : key));
    }, 500);
  }

  function handleTouchEnd() {
    clearTimeout(longPressTimer.current);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-grid-section" ref={sectionRef}>
      <Container>
        <h2 className="section-title">{t.all_projects}</h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={project.key} xs={12} sm={6} lg={4}>
              <div
                className={`project-card ${active ? "active" : ""}`}
                style={{ transitionDelay: `${index * 120}ms` }}
                onTouchStart={() => handleTouchStart(project.key)}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchEnd}
              >
                <div className="card-image-wrapper">
                  <img
                    src={project.cover}
                    alt={t[project.titleKey]}
                    className="card-image"
                    style={project.coverScale ? { transform: `scale(${project.coverScale})` } : undefined}
                  />
                </div>

                <div className="card-content">
                  <div className="card-header-row">
                    <h3 className="card-title">{t[project.titleKey]}</h3>
                    {project.year && (
                      <span className="card-year">{project.year}</span>
                    )}
                  </div>

                  <p className={`card-desc${expandedKey === project.key ? " expanded" : ""}`}>
                    {t[project.descKey]}
                  </p>

                  <div className="card-links">
                    {project.website && (
                      <a
                        href={project.website}
                        className="text-white link-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Website"
                      >
                        <FontAwesomeIcon icon={faGlobe} size="lg" />
                      </a>
                    )}
                    {project.instagram && (
                      <a
                        href={project.instagram}
                        className="text-white link-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </a>
                    )}
                    {project.spotify && (
                      <a
                        href={project.spotify}
                        className="text-white link-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Spotify"
                      >
                        <FontAwesomeIcon icon={faSpotify} size="lg" />
                      </a>
                    )}
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        className="text-white link-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                      >
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .projects-grid-section {
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

        /* CARD */
        .project-card {
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          overflow: hidden;
          height: 100%;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease,
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .project-card.active {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover {
          border-color: rgba(255, 255, 255, 0.18);
          transform: translateY(-6px);
          transition: border-color 0.3s ease, transform 0.35s ease,
            opacity 0.7s ease;
        }

        /* IMAGE */
        .card-image-wrapper {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .project-card:hover .card-image {
          transform: scale(1.05);
        }

        /* BODY */
        .card-content {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-header-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .card-title {
          font-family: 'Oswald', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #f2e9ea;
          margin: 0;
        }

        .card-year {
          font-size: 0.8rem;
          color: #b8aeb0;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .card-desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: #b8aeb0;
          margin-bottom: 1rem;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: max-height 0.35s ease, -webkit-line-clamp 0.1s;
        }

        .project-card:hover .card-desc,
        .card-desc.expanded {
          -webkit-line-clamp: unset;
          overflow: visible;
          display: block;
        }

        /* LINKS */
        .card-links {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .link-icon {
          color: #f2e9ea;
          font-size: 1.3rem;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .link-icon:hover {
          color: #ffffff;
          transform: scale(1.2);
        }

        @media (max-width: 860px) {
          .projects-grid-section {
            padding: 3rem 0;
          }
        }
      `}</style>
    </section>
  );
}
