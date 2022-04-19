import NavBar from "../components/NavBar"
import Head from "next/head"
import Footer from "../components/Footer"
import Galery from '../components/Galery'

import en from '../locales/en'
import pt from '../locales/pt'
import { useRouter } from 'next/router'

const main_tittle = "Augusto Baschera"

export default function Galerya(){
    const router = useRouter();
    const locale = router.locale;
    const t = (locale === 'pt') ? pt : en;
    console.log(locale)
    return (
        <>
            <section className="projects-section bg-dark">
                <Head>
                    <title>{main_tittle}</title>
                    <meta name="description" content="Jazz Mussician Guitarist Augusto Baschera" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/AB.png" />
                </Head>
                <NavBar />

                <div className="container px-4 px-lg-5 pt-lg-2 pb-5 pb-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="project-page mx-auto my-0 text-uppercase">{t.menu_galery}</h1>
                        </div>
                    </div>
                </div>

               <Galery></Galery>
            </section>
            <Footer />

        </>
    )
}