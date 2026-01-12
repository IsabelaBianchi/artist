import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import en from "../locales/en";
import pt from "../locales/pt";

const albums = [
  {
    title: 'Apócrifo',
    year: '2025',
    cover: '/apocrifo.webp',
    slug: 'apocrifo',
  },
  {
    title: 'Tempos e Lugares',
    year: '2022',
    cover: '/tempos_e_lugares.webp',
    slug: 'tempos-e-lugares',
  },
  {
    title: 'Grey City',
    year: '2019',
    cover: '/grey_city.webp',
    slug: 'grey-city',
  },
  {
    title: 'Palavra de Fantoche',
    year: '2016',
    cover: '/palavra_de_fantoche.jpeg',
    slug: 'palavra-de-fantoche',
  },
];

export default function DiscographySection() {
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;

  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect(); // anima só uma vez
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
                <Link href={`/albums/${album.slug}`} className="album-link">
                  <div className="album-card">
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="album-cover"
                    />
                    <div className="album-meta">
                      <h3>{album.title}</h3>
                      <span>{album.year}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .discography-section {
          padding: 6rem 0;
          background: radial-gradient(
            #3a0f14 30%,
            #1a0b0e 45%,
            #090305 100%
          );
        }

        .section-title {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          margin-bottom: 3rem;
          text-transform: uppercase;
          color: #f2e9ea;
        }

        /* Wrapper animado */
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

        .album-card {
          transition: transform 0.4s ease;
        }

        .album-card:hover {
          transform: translateY(-12px);
        }

        .album-cover {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 18px 32px rgba(0, 0, 0, 0.35);
        }

        .album-meta {
          margin-top: 1rem;
        }

        .album-meta h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #f2e9ea;
        }

        .album-meta span {
          font-size: 0.85rem;
          color: #b8aeb0;
        }
      `}</style>
    </section>
  );
}
