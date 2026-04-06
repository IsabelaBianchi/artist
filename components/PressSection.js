import { Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

const pressItems = [
  { src: "/media1.png", alt: "Press 1" },
  { src: "/media2.png", alt: "Press 2" },
];

export default function PressSection() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

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
    <section className="press-section" ref={sectionRef}>
      <Container>
        <h2 className="section-title">Press</h2>
        <div className={`press-card ${active ? "active" : ""}`}>
          {pressItems.map((item, index) => (
            <img key={index} src={item.src} alt={item.alt} className="press-image" />
          ))}
        </div>
      </Container>

      <style jsx>{`
        .press-section {
          padding: 4rem 0 6rem;
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

        .press-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          padding: 1.25rem;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease,
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .press-card.active {
          opacity: 1;
          transform: translateY(0);
        }

        .press-card:hover {
          border-color: rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.12);
        }

        .press-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
        }

        .press-image + .press-image {
          margin-top: -2px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }

        .press-image:first-child {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }

        @media (max-width: 860px) {
          .press-section {
            padding: 3rem 0 4rem;
          }

          .press-section :global(.container) {
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
          }


          .press-card {
            border-radius: 0;
            border-left: none;
            border-right: none;
          }
        }
      `}</style>
    </section>
  );
}
