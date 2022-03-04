import Head from "next/head"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const main_tittle = " Augusto Baschera"
const about_text = " Augusto Baschera é um guitarrista dos relevantes nomes da nova geração da música brasileira, que propõe um novo enredo para o instrumento e a composição. Da tradição ao moderno, busca um equilíbrio de luz e sombra que convida o ouvinte a contemplar a paisagem densa e viver o presente através da improvisação. Sua música é intensa e não dá espaço para a indiferença"
const project_one_tittle = "Grey City"
const project_one_description = "O álbum Grey City de Augusto Baschera  e João Bernardo  tem como mote principal a fusão tímbrica desta formação singular. O disco apresenta influência da música popular, erudita e jazz. A música surge a partir de uma voz intimista e desenvolve-se através de uma linguagem moderna, de modo a retratar a justaposição de realidades distintas. Augusto Baschera e João Bernardo fazem de “Grey City” um veículo de discurso que questiona as suas condutas musicais em tempos atuais."

const project_two_tittle = "Palavra de Fantoche"
const project_two_description = "..."

const contact_email = "augustobaschera@hotmail.com"
const contact_number = "+351918307750"

export default function Home() {

    return (
        <>
           

                <div className="container-fluid bg-dark">

                    <Head>
                        <title>{main_tittle}</title>
                        <meta name="description" content="descrition about this page" />
                        <link rel="icon" type="image/png" sizes="32x32" href="/AB.png" />
                    </Head>
                    <NavBar />

                </div>

                <header className="masthead">
                    <div className="container px-4 px-lg-5 pt-lg-6 d-flex h-100 align-items-center justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div className="text-center">
                                <h1 className="mx-auto my-0 text-uppercase">{main_tittle}</h1>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="about-section text-center" id="about">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-8">
                                <p className="text-white-50">
                                    {about_text}
                                </p>
                            </div>
                        </div>
                        {/* <img className="img-fluid" src="/augusto_baschera_13.png" alt="Jazz Guitarrist Augusto Baschera" /> */}
                    </div>
                </section>


                <section className="projects-section bg-dark" id="projects">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5">

                            <div className="col-4">
                                <img className="img-fluid" src="/grey_city.jpg" alt="Grey City" />

                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="/palavra_de_fantoche.jpg" alt="Palavra de Fantoche" />
                            </div>
                        </div>

                        {/* <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                            <div className="col-lg-6"><img className="img-fluid" src="/grey_city.jpg" alt="Grey City" /></div>
                            <div className="col-lg-6">
                                <div className="bg-black text-center h-100 project">
                                    <div className="d-flex h-100">
                                        <div className="project-text w-100 my-auto text-justify text-lg-left">
                                            <h4 className="text-white">{project_one_tittle}</h4>
                                            <p className="mb-0 text-white-50">{project_one_description}</p>
                                            <hr className="d-none d-lg-block mb-0 ms-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row gx-0 justify-content-center">
                            <div className="col-lg-6"><img className="img-fluid" src="/palavra_de_fantoche.jpg" alt="Palavra de Fantoche" /></div>
                            <div className="col-lg-6 order-lg-first">
                                <div className="bg-black text-center h-100 project">
                                    <div className="d-flex h-100">
                                        <div className="project-text w-100 my-auto text-center text-lg-right">
                                            <h4 className="text-white">{project_two_tittle}</h4>
                                            <p className="mb-0 text-white-50">{project_two_description}</p>
                                            <hr className="d-none d-lg-block mb-0 me-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="text-center my-3">
                            <a className="btn btn-primary" href="/all_projects">All Projects</a>
                        </div>
                    </div>
                </section>



                <section className="contact-section bg-black" id="signup">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5">

                            <div className="col-md-6 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fas fa-envelope text-primary mb-2"></i>
                                        <h4 className="text-uppercase m-0">Email</h4>
                                        <hr className="my-4 mx-auto" />
                                        <div className="small text-black-50"><a href="#!">{contact_email}</a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fas fa-envelope text-primary mb-2"></i>
                                        <h4 className="text-uppercase m-0">Phone / Whatsapp</h4>
                                        <hr className="my-4 mx-auto" />
                                        <div className="small text-black-50"><a href="#!">{contact_number}</a></div>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                </section>
                <Footer />
           
        </>



    );
}

