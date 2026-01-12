import Head from "next/head";
import LinkNext from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
("../components/AboutSection");
import DiscographySection from "../components/DiscographySection";
import en from "../locales/en";
import pt from "../locales/pt";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;

  return (
    <>
      <div className="container-fluid bg-dark">
        <Head>
          <title>{t.main_tittle}</title>
          <meta name="description" content="Jazz Guitarist Augusto Baschera" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/augusto_baschera_04.jpeg"
          />
        </Head>
        <NavBar />
      </div>
      <section className="masthead position-sticky">
        <div className="typing-container">
          <h1 className="typing-text">Augusto Baschera</h1>
        </div>
        <video
          className="masthead-video desktop"
          autoPlay
          loop
          muted
          playsInline
          src="/baschera_video.MOV"
        />
        <video
          className="masthead-video mobile"
          autoPlay
          loop
          muted
          playsInline
          src="/baschera_video.mp4"
        />
      </section>

      <section className="z-20" id="aboutd">
        <AboutSection />
      </section>
      <section className="z-30" id="discography">
        <DiscographySection />
      </section>

      <section className="z-20 projects-home-section bg-dark" id="projects">
        <div className="proje px-4 px-lg-5 pt-lg-6 d-flex h-100 mt-6 align-items-center justify-content-center justify-content-center ">
          <LinkNext href="/all_projects" locale={locale}>
            <a className="btn btn-outline-light btn-sm ">{t.all_projects}</a>
          </LinkNext>
        </div>
      </section>

      <section className="z-20 contact-section bg-black" id="signup">
        <Footer />
      </section>
    </>
  );
}
