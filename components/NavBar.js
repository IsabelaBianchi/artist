import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSpotify,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import en from "../locales/en";
import pt from "../locales/pt";

const socials = [
  { icon: faInstagram, href: "https://www.instagram.com/augustobaschera/", label: "Instagram" },
  { icon: faSpotify,   href: "https://open.spotify.com/artist/0TtNm2GzxTYki2zQTLOiVE", label: "Spotify" },
  { icon: faYoutube,   href: "https://www.youtube.com/channel/UCO-RAD7pnuGJDXODein96cQ", label: "YouTube" },
  { icon: faFacebook,  href: "https://www.facebook.com/augusto.baschera", label: "Facebook" },
];

export default function NavBar() {
  const router = useRouter();
  const locale = router.locale;
  const t = locale === "pt" ? pt : en;

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // glassmorphism after masthead
  useEffect(() => {
    const onScroll = () => {
      const masthead = document.querySelector(".masthead");
      const threshold = masthead ? masthead.offsetHeight - 56 : window.innerHeight - 56;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.menu_biography, id: "aboutd" },
    { label: t.discography,    id: "discography" },
    { label: t.all_projects,   id: "projects" },
    { label: t.menu_contact,   id: "signup" },
  ];

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <nav className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner">
        {/* left — empty intentionally */}
        <div className="nav-left" />

        {/* right — socials + menu */}
        <div className="nav-right">
          <div className="nav-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="social-icon"
              >
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </div>

          <div className="menu-wrap" ref={dropRef}>
            <button
              className={`menu-btn ${open ? "is-open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-haspopup="true"
            >
              Menu
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`chevron ${open ? "rotated" : ""}`}
              />
            </button>

            {open && (
              <ul className="nav-dropdown" role="menu">
                {navLinks.map((link) => (
                  <li key={link.label} role="none">
                    <button
                      role="menuitem"
                      className="drop-link"
                      onClick={() => scrollTo(link.id)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          background: transparent;
          border-bottom: none;
          z-index: 1000;
          transition: background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease;
        }

        .site-nav.is-scrolled {
          background: rgba(12, 11, 10, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 56px;
        }

        .nav-left {
          flex: 1;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        /* socials */
        .nav-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .social-icon {
          color: rgba(255, 255, 255, 0.65);
          font-size: 1.6rem;
          transition: color 0.2s ease, transform 0.2s ease;
          display: flex;
          align-items: center;
        }

        .social-icon:hover {
          color: #fff;
          transform: scale(1.15);
        }

        /* menu button */
        .menu-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          border-radius: 999px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          padding: 0.35rem 1rem;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .menu-btn:hover,
        .menu-btn.is-open {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.7);
        }

        .chevron {
          font-size: 0.65rem;
          transition: transform 0.25s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }

        /* dropdown */
        .menu-wrap {
          position: relative;
        }

        .nav-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          background: rgba(20, 5, 10, 0.88);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 0.5rem 0;
          list-style: none;
          margin: 0;
          min-width: 180px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          animation: dropIn 0.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .drop-link {
          display: block;
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          padding: 0.65rem 1.4rem;
          font-family: 'Oswald', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.75);
          cursor: pointer;
          transition: color 0.15s ease, background 0.15s ease;
        }

        .drop-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.06);
        }

        /* mobile */
        @media (max-width: 480px) {
          .nav-inner {
            padding: 0 1rem;
          }

          .nav-socials {
            gap: 1rem;
          }

          .social-icon {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </nav>
  );
}
