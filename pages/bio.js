import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import en from "../locales/en";
import pt from "../locales/pt";
import { useRouter } from "next/router";

export default function Bio() {
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;

  const paragraphs = [
    t.about_biografy_1,
    t.about_biografy_2,
    t.about_biografy_3,
    t.about_biografy_4,
    t.about_biografy_5,
    t.about_biografy_6,
    t.about_biografy_7,
  ];

  return (
    <>
      <Head>
        <title>Augusto Baschera — {t.menu_biography}</title>
        <meta name="description" content="Biography of Augusto Baschera" />
       
      </Head>

      <NavBar />

      <main className="bio-page">
        <div className="bio-hero">
          
          <div className="hero-overlay" />
          <h1 className="bio-hero-name">Augusto Baschera</h1>
        </div>

        <div className="bio-body">
          <div className="bio-content">
            {paragraphs.map((p, i) => (
              <p key={i} className="bio-paragraph">{p}</p>
            ))}
          </div>
        </div>

        <Footer />
      </main>

      <style jsx>{`
        .bio-page {
          background: url('/augusto_baschera_festival_1.jpg') center top / cover no-repeat fixed;
          min-height: 100vh;
        }

        /* HERO */
        .bio-hero {
          position: relative;
          height: 60vh;
          overflow: hidden;
        }

        .bio-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .bio-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.25) 0%,
            rgba(0, 0, 0, 0.65) 100%
          );
        }

        .bio-hero-name {
          position: absolute;
          bottom: 2.5rem;
          left: 5vw;
          font-family: 'Oswald', sans-serif;
          font-size: clamp(2.4rem, 6vw, 5rem);
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #f5f0ee;
          margin: 0;
        }

        /* BODY */
        .bio-body {
          padding: 5rem 5vw;
        }

        .bio-content {
          max-width: 780px;
          margin: 0 0 0 14vw;
          background: rgba(10, 10, 10, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 10px;
          padding: 3rem 3.5rem;
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .bio-paragraph {
          font-size: 1.1rem;
          line-height: 1.85;
          color: #ddd4d6;
          margin-bottom: 1.8rem;
        }

        .bio-paragraph:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 640px) {
          .bio-hero {
            height: 45vh;
          }

          .bio-body {
            padding: 3rem 1.5rem;
          }

          .bio-content {
            padding: 2rem 1.5rem;
          }

          .bio-paragraph {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
