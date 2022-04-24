import NavBar from "../components/NavBar"
import Head from "next/head"
import Footer from "../components/Footer"

import en from '../locales/en'
import pt from '../locales/pt'
import { useRouter } from 'next/router'

const main_tittle = "Augusto Baschera"

export default function Galerya() {
    const router = useRouter();
    const locale = router.locale;
    const t = (locale === 'pt') ? pt : en;
   
    return (
        <>
            <Head>
                <title>{main_tittle}</title>
                <meta name="description" content="Jazz Music Guitarist Augusto Baschera" />
                <link rel="icon" type="image/png" sizes="32x32" href="/AB.png" />
            </Head>
            <NavBar />

            <div className="bio">

                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content">
                   
                        <div className="col-lg-6">
                            <p className="text-white-50">
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-white-50">
                            {t.about_biografy_one}
                                {t.about_biografy_two}
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            <Footer />


        </>
    )
}