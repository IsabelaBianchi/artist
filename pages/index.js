import Head from "next/head";
import LinkNext from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArtistProfile from "../components/ArtistProfile.js";
import DiscographySection from "../components/DiscographySection";
import en from "../locales/en";
import pt from "../locales/pt";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ProjectsGrid from "../components/ProjectsGrid";
import PressSection from "../components/PressSection";

export default function Home() {
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;

  return (
    <>
      <Head>
        <title>{t.main_tittle}</title>
        <meta name="description" content="Jazz Guitarist Augusto Baschera" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/augusto_baschera_portugal.jpg"
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
