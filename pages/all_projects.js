import NavBar from "../components/NavBar"
import Head from "next/head"
import Footer from "../components/Footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";

const main_tittle = " Augusto Baschera"
const project_one_tittle = "Grey City"
const project_one_description = "O álbum Grey City de Augusto Baschera  e João Bernardo  tem como mote principal a fusão tímbrica desta formação singular. O disco apresenta influência da música popular, erudita e jazz. A música surge a partir de uma voz intimista e desenvolve-se através de uma linguagem moderna, de modo a retratar a justaposição de realidades distintas. Augusto Baschera e João Bernardo fazem de “Grey City” um veículo de discurso que questiona as suas condutas musicais em tempos atuais."
const project_two_tittle = "Palavra de Fantoche"
const project_two_description = "..."

export default function AllProjects() {
    return (
        <body id="page-top">


            <section className="projects-section bg-dark">
                <Head>
                    <title>{main_tittle}</title>
                    <meta name="description" content="Jazz Mussic Augusto Baschera" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/AB.png" />
                </Head>
                <NavBar />

                <div className="container px-4 px-lg-5">

                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div className="col-xl-4 col-lg-5"><img className="img-fluid mb-3 mb-lg-0" src="/grey_city.jpg" alt="Grey City" /></div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="featured-text text-center text-lg-left">

                                <h4 className="text-white">{project_one_tittle}</h4>
                                <div className="row justify-content-center">
                                    <a className="text-white col-sm-2 col-3" href="https://open.spotify.com/album/28yXED1dOLIQXf9EObeLdx"><FontAwesomeIcon icon={faSpotify} /></a>
                                    <a className="text-white col-sm-2 col-3" href="https://www.youtube.com/channel/UCb40yaXX-IrO5lyUBAV3MUg"><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>

                                <p className="text-white mt-2 mb-0 text-justify">{project_one_description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div className="col-xl-4 col-lg-5"><img className="img-fluid mb-3 mb-lg-0" src="/palavra_de_fantoche.jpg" alt="Palavra de Fantoche" /></div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="featured-text text-center text-lg-left">

                                <h4 className="text-white">{project_two_tittle}</h4>
                                <div className="row justify-content-center">
                                    <a className="text-white col-sm-2 col-3" href="https://open.spotify.com/album/1t0CTVfRu9lgughcB7dz6z"><FontAwesomeIcon icon={faSpotify} /></a>
                                    <a className="text-white col-sm-2 col-3" href="https://www.youtube.com/watch?v=4VuIl_Egq7A&list=OLAK5uy_mmlesfoLHVV7e8weAsjYSXlTks1Tn_0SM"><FontAwesomeIcon icon={faYoutube} /></a>

                                </div>

                                <p className="text-white mt-2 mb-0 text-justify">{project_two_description}</p>
                                                            </div>
                        </div>
                    </div>


                </div>

            </section>
            <Footer />


        </body>
    )
}