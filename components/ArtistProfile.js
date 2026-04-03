import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import LinkNext from "next/link";
import en from "../locales/en";
import pt from "../locales/pt";

export default function ArtistProfile() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;

  // reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const bioExcerpt = t.about.split(".").slice(0, 2).join(".") + ".";

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`ap-section ${visible ? "is-visible" : ""}`}
    >
      <div className="ap-inner">

        {/* LEFT — text (staggered per element) */}
        <div className="ap-text">
        
          <div className="ap-rule anim-rule" style={{ "--d": "0.6s" }} />
          <p className="ap-bio anim-item" style={{ "--d": "0.78s" }}>
            {bioExcerpt}
          </p>
          <LinkNext href="/bio" className="ap-btn anim-item" style={{ "--d": "0.92s" }}>
            {t.read_more}
          </LinkNext>
        </div>

        {/* RIGHT — video */}
        <div className="ap-image-wrap anim-item" style={{ "--d": "0.3s" }}>
          <div className="ap-image-frame">
            <video
              className="ap-img"
              src="/augusto_baschera_1.MOV"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="ap-img-overlay" />
          </div>
        </div>

      </div>

      <style jsx>{`
        /* ── SECTION ── */
        .ap-section {
          background: transparent;
          padding: 5rem 5vw;
        }

        .ap-inner {
          display: flex;
          align-items: center;
          gap: 4rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── STAGGER BASE ── */
        .anim-item {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.9s ease var(--d),
                      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) var(--d);
        }

        .is-visible .anim-item {
          opacity: 1;
          transform: translateY(0);
        }

        /* rule draws left-to-right */
        .anim-rule {
          width: 0;
          opacity: 0;
          transition: width 0.7s cubic-bezier(0.22, 1, 0.36, 1) var(--d),
                      opacity 0.4s ease var(--d);
        }

        .is-visible .anim-rule {
          width: 2.5rem;
          opacity: 1;
        }

        /* ── TEXT ── */
        .ap-text {
          flex: 0 0 34%;
        }

        .ap-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #777;
          margin-bottom: 1.1rem;
        }

        .ap-title {
          font-size: clamp(2.8rem, 4vw, 4.2rem);
          font-weight: 700;
          line-height: 1.04;
          color: #f5f0ee;
          margin: 0 0 1.5rem;
          letter-spacing: -0.01em;
        }

        .ap-rule {
          height: 2px;
          background: rgba(255, 255, 255, 0.35);
          margin-bottom: 1.5rem;
        }

        .ap-bio {
          font-size: 1.3rem;
          line-height: 1.8;
          color: #ddd4d6;
          margin: 0 0 2rem;
        }

        .ap-btn {
          display: inline-block;
          padding: 0.65rem 1.6rem;
          border: 1px solid #fff;
          background: #fff;
          color: #111;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }

        .ap-btn:hover {
          background: rgba(255, 255, 255, 0.85);
          color: #111;
        }

        /* ── IMAGE ── */
        .ap-image-wrap {
          flex: 1;
        }

        .ap-image-frame {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          margin: 1.5rem 0 1.5rem 2rem;
          box-shadow: 0 32px 72px rgba(0, 0, 0, 0.65),
                      0  8px 24px rgba(0, 0, 0, 0.45);
        }

        .ap-img {
          display: block;
          width: 100%;
          height: 70vh;
          object-fit: cover;
          object-position: center top;
        }

        .ap-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.0) 0%,
            rgba(0, 0, 0, 0.06) 100%
          );
        }

        /* ── MOBILE ── */
        @media (max-width: 860px) {
          .ap-section {
            padding: 0 0 3rem;
          }

          .ap-inner {
            flex-direction: column;
            gap: 0;
          }

          .ap-text {
            flex: none;
            width: 100%;
            padding: 1.5rem 6vw 1.5rem;
            text-align: center;
          }

          .ap-rule {
            margin-left: auto;
            margin-right: auto;
          }

          .ap-bio {
            font-size: 1.15rem;
          }

          .ap-image-wrap {
            width: 100%;
          }

          .ap-image-frame {
            margin: 0;
            border-radius: 0;
            box-shadow: none;
          }

          .ap-img {
            height: 62vw;
            min-height: 260px;
          }
        }
      `}</style>
    </section>
  );
}
