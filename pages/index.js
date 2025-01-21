import Head from "next/head";
import LinkNext from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import en from "../locales/en";
import pt from "../locales/pt";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import MyModal from "../components/Modal";
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
          <meta property="og:image" content="/augusto_baschera_1.jpg" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/augusto_baschera_1.jpg"
          />
        </Head>
        <NavBar />
      </div>
      <MyModal />
      <section className="masthead" />

      <section className="z-20 about-section text-center bg-light" id="about">
        <div className="px-4 px-lg-5 pt-lg-6 d-flex h-100 align-items-center justify-content-center justify-content-center ">
          <div className="col-6">
            <p className="text-white-50 mt-5">{t.about}</p>
          </div>
        </div>
        <div>
          <LinkNext href="/bio" locale={locale}>
            <a className="btn mb-6 btn-outline-light btn-sm ">
              {t.menu_biography}
            </a>
          </LinkNext>
        </div>
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
