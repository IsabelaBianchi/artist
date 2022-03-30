import NavBar from "../components/NavBar"

import Head from "next/head"
import Footer from "../components/Footer"

import en from '../locales/en'
import pt from '../locales/pt'
import { useRouter } from 'next/router'
import { Carousel, CarouselItem, Figure } from "react-bootstrap";
const main_tittle = "Augusto Baschera"



export default function Galery() {

    const router = useRouter();
    const locale = router.locale;
    const t = (locale === 'pt') ? pt : en;

    function importAllGaleryImages(r) {
        let images = r.keys().map((value) => value.replace('./', './galery/'));
        return images
    }

    const images = importAllGaleryImages(require.context('../public/galery', false, /\.(png|jpe?g|svg)$/));


    return (
        <>

            <section className="projects-section bg-dark">
                <Head>
                    <title>{main_tittle}</title>
                    <meta name="description" content="Jazz Mussician Guitarist Augusto Baschera" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/AB.png" />
                </Head>
                <NavBar />

                <div className="container px-8 px-lg-5">
                    <Carousel fade>
                        {images.map((img) =>
                            <CarouselItem>
                                <Figure className="galeryphotos" key={img}>
                                    <Figure.Image
                                        alt={img}
                                        src={img}
                                    >

                                    </Figure.Image>

                                </Figure>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </CarouselItem>
                        )}
                    </Carousel>
                </div>

            </section>
            <Footer />

        </>
    )
}