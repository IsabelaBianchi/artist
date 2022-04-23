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
        let images = r.keys().map((value) => value.replace('./', '/galery/'));
        console.log(images);
        return images
    }

    const images = importAllGaleryImages(require.context('../public/galery', false, /\.(png|jpe?g|svg)$/));

    return (
        <>
            {images.map((img) =>
                <Figure className="col-lg-4 col-sm-6 galeryphotos img-thumbnail" key={img}>
                    <Figure.Image
                        alt={img}
                        src={img}
                      
                    >
                    </Figure.Image>
                </Figure>
            )}

        </>
    )
}