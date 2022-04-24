import NavBar from "../components/NavBar"
import Head from "next/head"
import Footer from "../components/Footer"

import en from '../locales/en'
import pt from '../locales/pt'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";

const main_tittle = "Augusto Baschera"

export default function AllProjects() {
    const router = useRouter();
    const locale = router.locale;
    const t = (locale === 'pt') ? pt : en;

    return (
        <>
            <section className="projects-section bg-dark">
                <Head>
                    <title>{main_tittle}</title>
                    <meta name="description" content="Jazz Music Guitarist Augusto Baschera" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/AB.png" />
                </Head>
                <NavBar />

                <div className="container px-4 px-lg-5 pt-lg-2 pb-5 pb-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="project-page mx-auto my-0 text-uppercase">{t.menu_projects}</h1>
                        </div>
                    </div>
                </div>

                <div className="container px-4 px-lg-5">
                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div className="col-xl-4 col-lg-4"><img className="img-fluid mb-3 mb-lg-0" src="/grey_city.jpeg" alt="Grey City" /></div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="featured-text text-center text-lg-left">

                                <h4 className="text-white">{t.project_one_tittle}</h4>
                                <div className="row justify-content-center">
                                    <a className="text-white col-sm-1-5 col-3" href="https://open.spotify.com/album/28yXED1dOLIQXf9EObeLdx"><FontAwesomeIcon icon={faSpotify} /></a>
                                    <a className="text-white col-sm-1-5 col-3" href="https://www.youtube.com/channel/UCb40yaXX-IrO5lyUBAV3MUg"><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>

                                <p className="text-white mt-2 mb-0 text-justify projects-p-text">{t.project_one_description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div className="col-xl-4 col-lg-4"><img className="img-fluid mb-3 mb-lg-0" src="/palavra_de_fantoche.jpeg" alt="Palavra de Fantoche" /></div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="featured-text text-center text-lg-left">

                                <h4 className="text-white">{t.project_two_tittle}</h4>
                                <div className="row justify-content-center">
                                    <a className="text-white col-sm-1-5 col-3" href="https://open.spotify.com/album/1t0CTVfRu9lgughcB7dz6z"><FontAwesomeIcon icon={faSpotify} /></a>
                                    <a className="text-white col-sm-1-5 col-3" href="https://www.youtube.com/watch?v=4VuIl_Egq7A&list=OLAK5uy_mmlesfoLHVV7e8weAsjYSXlTks1Tn_0SM"><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>
                                <p className="text-white mt-2 mb-0 text-justify projects-p-text">{t.project_two_description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div className="col-xl-4 col-lg-4"><img className="img-fluid mb-3 mb-lg-0" src="/baschera_bernardino.jpg" alt="Baschera_Bernardino" /></div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="featured-text text-center text-lg-left">

                                <h4 className="text-white">{t.project_three_tittle}</h4>
                                <div className="row justify-content-center">
                                    <a className="text-white col-sm-1-5 col-3" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwisz7a0ipn3AhWhIbkGHcOjDbMQwqsBegQIAhAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxnqynDaP3hk&usg=AOvVaw2CJHIIkIG-eFVRaqjeI81E"><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>
                                <p className="text-white mt-2 mb-0 text-justify projects-p-text">{t.project_three_description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div className="col-xl-4 col-lg-4"><img className="img-fluid mb-3 mb-lg-0" src="/galery/4.png" alt="Baschera_Bernardino" /></div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="featured-text text-center text-lg-left">

                                <h4 className="text-white">{t.project_four_tittle}</h4>
                                <div className="row justify-content-center">
                                    <a className="text-white col-sm-1-5 col-3" href="hhttps://www.youtube.com/watch?v=Fi-B3nDIBkI&t=157s"><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>
                                <p className="text-white mt-2 mb-0 text-justify projects-p-text">{t.project_four_description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}