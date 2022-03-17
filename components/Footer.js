import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (


        <section className="contact-section bg-black" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">

                    <div className="social d-flex justify-content-center">

                        <a className="mx-2" href="https://www.youtube.com/channel/UCO-RAD7pnuGJDXODein96cQ"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a className="mx-2" href="https://www.instagram.com/augustobaschera/"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="mx-2" href="https://www.facebook.com/augusto.baschera"><FontAwesomeIcon icon={faFacebook} /></a>


                    </div>




                </div>

            </div>
            <footer className="footer bg-black small text-center text-white-50"><div className="container px-4 px-lg-5"></div></footer>
        </section>
    )
}