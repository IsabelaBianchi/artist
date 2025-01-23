import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";

import en from "../locales/en";
import pt from "../locales/pt";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";

const main_tittle = "Augusto Baschera";

export default function AllProjects() {
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;

  return (
    <>
      <section className="projects-section bg-black">
        <Head>
          <title>{main_tittle}</title>
          <meta name="description" content="Jazz Guitarist Augusto Baschera" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/augusto_baschera_1.jpg"
          />
        </Head>
        <NavBar />

        <div className="container px-4 px-lg-5 pt-lg-2 pb-5 pb-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="project-page mx-auto my-0 ">{t.all_projects}</h1>
            </div>
          </div>
        </div>

        <div className="container px-4 px-lg-5">
          
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-4 col-lg-4">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="/apocrifo.webp"
                alt="apocrifo"
              />
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="featured-text text-center text-lg-left">
                <h4 className="text-white">{t.project_apocrifo_title}</h4>
                <div className="row justify-content-center">
                  <a
                    className="text-white col-sm-1-5 col-3"
                    href="https://open.spotify.com/album/48nwdW8KUjJyePnTBVtxiT"
                  >
                    <FontAwesomeIcon icon={faSpotify} />
                  </a>
                  <a
                    className="text-white col-sm-1-5 col-3"
                    href="https://www.youtube.com/watch?v=eRudKpMv_SI"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>

                <p className="text-white mt-2 mb-0 text-justify projects-p-text">
                  {t.project_apocrifo_description}
                </p>
              </div>
            </div>
          </div>

          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-4 col-lg-4">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="/travessia.webp"
                alt="travessia"
              />
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="featured-text text-center text-lg-left">
                <h4 className="text-white">{t.project_five_tittle}</h4>
                <div className="row justify-content-center">
                  <a
                    className="text-white col-sm-1-5 col-3"
                    href="https://www.youtube.com/watch?v=w1CSGxQXFyk"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>

                <p className="text-white mt-2 mb-0 text-justify projects-p-text">
                  {t.project_five_description}
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-4 col-lg-4">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="/tempos_e_lugares.webp"
                alt="tempos e lugares"
              />
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="featured-text text-center text-lg-left">
                <h4 className="text-white">{t.project_tl_tittle}</h4>
                <div className="row justify-content-center">
                  <a
                    className="text-white col-sm-1-5 col-3"
                    href="https://open.spotify.com/album/48nwdW8KUjJyePnTBVtxiT"
                  >
                    <FontAwesomeIcon icon={faSpotify} />
                  </a>
                  <a
                    className="text-white col-sm-1-5 col-3"
                    href="https://www.youtube.com/watch?v=eRudKpMv_SI"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>

                <p className="text-white mt-2 mb-0 text-justify projects-p-text">
                  {t.project_tl_description}
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-4 col-lg-4">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="/grey_city.webp"
                alt="Grey City"
              />
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="featured-text text-center text-lg-left">
                <h4 className="text-white">{t.project_one_tittle}</h4>
                <div className="row justify-content-center">
                  <a
                    className="text-white col-sm-1-5 col-3"
                    href="https://open.spotify.com/album/28yXED1dOLIQXf9EObeLdx"
                  >
                    <FontAwesomeIcon icon={faSpotify} />
                  </a>
                  <a
                    className="text-white col-sm-1-5 col-3"
                    href="https://www.youtube.com/channel/UCb40yaXX-IrO5lyUBAV3MUg"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>

                <p className="text-white mt-2 mb-0 text-justify projects-p-text">
                  {t.project_one_description}
                </p>
              </div>
            </div>
          </div>

          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-4 col-lg-4">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="/palavra_de_fantoche.jpeg"
                alt="Palavra de Fantoche"
              />
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="featured-text text-center text-lg-left">
                <h4 className="text-white">{t.project_two_tittle}</h4>
                <div className="row justify-content-center">
                  <a
                    className="text-white col-sm-1-5 col-3"
                    href="https://open.spotify.com/album/1t0CTVfRu9lgughcB7dz6z"
                  >
                    <FontAwesomeIcon icon={faSpotify} />
                  </a>
                  <a
                    className="text-white col-sm-1-5 col-3"
                    href="https://www.youtube.com/watch?v=4VuIl_Egq7A&list=OLAK5uy_mmlesfoLHVV7e8weAsjYSXlTks1Tn_0SM"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
                <p className="text-white mt-2 mb-0 text-justify projects-p-text">
                  {t.project_two_description}
                </p>
              </div>
            </div>
          </div>

          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-4 col-lg-4">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="/baschera_bernardino.webp"
                alt="Baschera_Bernardino"
              />
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="featured-text text-center text-lg-left">
                <h4 className="text-white">{t.project_three_tittle}</h4>
                <div className="row justify-content-center">
                  <a
                    className="text-white col-sm-1-5 col-3"
                    href="https://www.youtube.com/watch?v=0GCyS5c-DO4"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
                <p className="text-white mt-2 mb-0 text-justify projects-p-text">
                  {t.project_three_description}
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-4 col-lg-4">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="/concierto_aranjuez.png"
                alt="aranjuez"
              />
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="featured-text text-center text-lg-left">
                <h4 className="text-white">{t.project_four_tittle}</h4>
                <div className="row justify-content-center">
                  <a
                    className="text-white col-sm-1-5 col-3"
                    href="https://www.youtube.com/watch?v=Fi-B3nDIBkI"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
                <p className="text-white mt-2 mb-0 text-justify projects-p-text">
                  {t.project_four_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
