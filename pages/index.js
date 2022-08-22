import Head from "next/head"
import LinkNext from "next/link"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import en from '../locales/en'
import pt from '../locales/pt'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    const locale = router.locale;
    const t = (locale === 'pt') ? pt : en;


    return (
        <>
            <div className="container-fluid bg-dark">

                <Head>
                    <title>{t.main_tittle}</title>
                    <meta name="description"  content="Jazz Guitarist Augusto Baschera" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/AB.png" />
                </Head>
                <NavBar />

            </div>

            <header className="masthead">
                <div className="container px-4 px-lg-5 pt-lg-6 d-flex h-100 mt-6 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="mx-auto my-0  text-uppercase">{t.main_tittle}</h1>
                        </div>
                        
                    </div>
                    
                </div>

            </header>
            <section className="division-section pt-1 bg-dark"></section>
            <section className="about-section text-center bg-dark" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8">
                            <p className="text-white-50">
                                {t.about}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        
            <section className="projects-home-section bg-dark" id="projects">
                <div className="proje  px-4 px-lg-5 pt-lg-6 d-flex h-100 mt-6 align-items-center justify-content-center justify-content-center ">
                    <LinkNext href="/all_projects" locale={locale}><a className="btn btn-outline-light btn-sm ">{t.all_projects}</a></LinkNext>
                </div>
            </section>

            <section className="contact-section bg-black" id="signup">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">E-mail</h4>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50"><a href="#!">{t.contact_email}</a></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">{t.contact_phone} / Whatsapp</h4>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50"><a href="https://wa.me/+351918307750">{t.contact_number}</a></div>
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

