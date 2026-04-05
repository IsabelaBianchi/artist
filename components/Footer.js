import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import en from "../locales/en";
import pt from "../locales/pt";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;
  return (
    <section className="contact-section" id="signup">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          <div className="social d-flex justify-content-center">
            <a
              className="mx-2"
              href="https://www.youtube.com/channel/UCO-RAD7pnuGJDXODein96cQ"
            >
              <FontAwesomeIcon icon={faYoutube} size="3x" />
            </a>
            <a
              className="mx-2"
              href="https://open.spotify.com/artist/0TtNm2GzxTYki2zQTLOiVE"
            >
              <FontAwesomeIcon icon={faSpotify} size="3x" />
            </a>
            <a
              className="mx-2"
              href="https://www.instagram.com/augustobaschera/"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a
              className="mx-2"
              href="https://www.facebook.com/augusto.baschera"
            >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a
              className="mx-2 footer-email-link"
              href={`mailto:${t.contact_email}`}
            >
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
          </div>
          <div className="social d-flex justify-content-center align-items-center guitar">
            <p style={{ marginLeft: "-1rem" }}><span className="cannali-text">{t.cannali_guitar1}</span>{" "}</p>
            <a href="https://www.canalliguitars.com/#sobre">
              <img alt="Canalli Guitars" src="/logo4.png" className="cannali-logo" />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer small text-center text-white-50">
        <div className="container px-4 px-lg-5"></div>
      </footer>
    </section>
  );
}
