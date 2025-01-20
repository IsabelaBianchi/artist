import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import en from "../locales/en";
import pt from "../locales/pt";
import { useRouter } from "next/router";
import { Figure } from "react-bootstrap";

export default function Footer() {
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;
  return (
    <section className="contact-section bg-black" id="signup">
      <div className="container px-4 px-lg-5">
        <div className="text-center text-white">{t.contact_email}</div>
        <div className="row gx-4 gx-lg-5">
          <div className="social d-flex justify-content-center">
            <a
              className="mx-2"
              href="https://www.youtube.com/channel/UCO-RAD7pnuGJDXODein96cQ"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              className="mx-2"
              href="https://open.spotify.com/artist/0TtNm2GzxTYki2zQTLOiVE"
            >
              <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a
              className="mx-2"
              href="https://www.instagram.com/augustobaschera/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="mx-2"
              href="https://www.facebook.com/augusto.baschera"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="social d-flex justify-content-center guitar">
            {t.cannali_guitar1}{" "}
            <a href="https://www.canalliguitars.com/#sobre">
              <Figure>
                {" "}
                <Figure.Image alt="" src="/logo4.png"></Figure.Image>
              </Figure>
            </a>
          </div>
        </div>
      </div>
      <footer className="footer bg-black small text-center text-white-50">
        <div className="container px-4 px-lg-5"></div>
      </footer>
    </section>
  );
}
