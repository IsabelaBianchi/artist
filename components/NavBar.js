import { useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import en from '../locales/en'
import pt from '../locales/pt'
import { useRouter } from 'next/router'
import LinkNext from 'next/link'

export default function NavBar() {
  const router = useRouter();
  const locale = router.locale;
  const t = (locale === 'pt') ? pt : en;

  useEffect(() => {
    const navbarShrink = () => {
      const navbarCollapsible = document.querySelector('#mainNav');
      if (!navbarCollapsible) return;

      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
      } else {
        navbarCollapsible.classList.add('navbar-shrink');
      }
    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    return () => {
      document.removeEventListener('scroll', navbarShrink);
    };
  }, []);

  return (
    <>
      <Navbar
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
        expand="lg" // Torna o menu colapsável
      >
        <Container>
          <Navbar.Brand className="nav-item navbar-brand" href="/">
            Augusto Baschera
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ms-auto">
              <LinkNext href="/bio" locale={locale} passHref>
                <Nav.Link>{t.menu_biography}</Nav.Link>
              </LinkNext>

              <LinkNext href="/all_projects" locale={locale} passHref>
                <Nav.Link>{t.all_projects}</Nav.Link>
              </LinkNext>

              <LinkNext href="/#signup" locale={locale} passHref>
                <Nav.Link>{t.menu_contact}</Nav.Link>
              </LinkNext>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
