import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArtistProfile from "../components/ArtistProfile.js";
import DiscographySection from "../components/DiscographySection";
import React from "react";
import ProjectsGrid from "../components/ProjectsGrid";
import PressSection from "../components/PressSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Augusto Baschera | Jazz Guitarist & Composer</title>
        <meta name="description" content="Augusto Baschera is a Brazilian jazz guitarist and composer based in Portugal. Known for his innovative language and expressive depth, Augusto blends Brazilian music with contemporary jazz." />
        <meta name="keywords" content="Augusto Baschera, jazz guitarist, Brazilian jazz, jazz guitar, guitarist Portugal, música contemporânea, violonista jazz, compositor jazz" />
        <meta name="author" content="Augusto Baschera" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://augustobaschera.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://augustobaschera.com" />
        <meta property="og:title" content="Augusto Baschera | Jazz Guitarist & Composer" />
        <meta property="og:description" content="Brazilian jazz guitarist and composer based in Portugal. Explore discography, projects and press." />
        <meta property="og:image" content="https://augustobaschera.com/augusto_baschera_portugal.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="pt_PT" />
        <meta property="og:site_name" content="Augusto Baschera" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Augusto Baschera | Jazz Guitarist & Composer" />
        <meta name="twitter:description" content="Brazilian jazz guitarist and composer based in Portugal." />
        <meta name="twitter:image" content="https://augustobaschera.com/augusto_baschera_portugal.jpg" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/augusto_baschera_portugal.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            "name": "Augusto Baschera",
            "url": "https://augustobaschera.com",
            "image": "https://augustobaschera.com/augusto_baschera_portugal.jpg",
            "description": "Brazilian jazz guitarist and composer based in Portugal.",
            "genre": ["Jazz", "Brazilian Music", "Contemporary Jazz"],
            "sameAs": [
              "https://www.instagram.com/augustobaschera/",
              "https://open.spotify.com/artist/0TtNm2GzxTYki2zQTLOiVE",
              "https://www.youtube.com/channel/UCO-RAD7pnuGJDXODein96cQ",
              "https://www.facebook.com/augusto.baschera"
            ],
            "member": {
              "@type": "Person",
              "name": "Augusto Baschera",
              "jobTitle": "Jazz Guitarist & Composer",
              "nationality": "Brazilian",
              "instrument": "Guitar"
            }
          })}}
        />
      </Head>
      <NavBar />
      <section className="masthead">
        <div className="typing-container">
          <h1 className="masthead-name">
            {["Augusto", "Baschera"].map((word, wi) => (
              <React.Fragment key={wi}>
                {wi > 0 && <span className="masthead-space">&nbsp;</span>}
                <span className="masthead-word">
                  {word.split("").map((char, ci) => {
                    const delay = (wi === 0 ? ci : 8 + ci) * 0.08;
                    return (
                      <span
                        key={ci}
                        className="masthead-char"
                        style={{ animationDelay: `${delay}s` }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              </React.Fragment>
            ))}
          </h1>
         
        </div>

        <button
          className="scroll-arrow"
          aria-label="Rolar para baixo"
          onClick={() =>
            document.getElementById("aboutd")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <video
          className="masthead-video"
          autoPlay
          loop
          muted
          playsInline
          src="/baschera_video.MOV"
        />
      </section>

      <div className="content-bg">
        <section className="z-20" id="aboutd">
          <ArtistProfile />
        </section>
        <section className="z-30" id="discography">
          <DiscographySection />
        </section>

        <section className="z-20 projects-home-section" id="projects">
          <ProjectsGrid />
        </section>

        <section className="z-20 press-home-section" id="press">
          <PressSection />
        </section>

        <section className="z-20 contact-section" id="signup">
          <Footer />
        </section>
      </div>

      <style jsx>{`
        .content-bg {
          background: url('/backgound.png') center top / cover no-repeat fixed;
        }
      `}</style>
    </>
  );
}
