
import { useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import en from '../locales/en'
import pt from '../locales/pt'
import { useRouter } from 'next/router'


export default function NavBar() {
  const router = useRouter();
  const locale = router.locale;
  const t = (locale === 'pt') ? pt : en;
  const urlCurrent = router.basePath;
  useEffect(() => {
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
      } else {
        navbarCollapsible.classList.add('navbar-shrink')
        navbarCollapsible.classList.remove('language-buttongroup')
      }

    };
    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });

  }, [])

  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top " id="mainNav">

        <Container>
      {}
          <Navbar.Brand className="nav-item navbar-brand" href="/">Home</Navbar.Brand>
          <Button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <Nav className="navbar-nav ms-auto  ">
              <Nav.Link className="nav-item" href="/#about">{t.menu_about}</Nav.Link>
              <Nav.Link className="nav-item" href="/all_projects" >{t.menu_projects}</Nav.Link>
              <Nav.Link className="nav-item" href="/galery">{t.menu_galery}</Nav.Link>
              <Nav.Link className="nav-item nav-link" href="/#signup">{t.menu_contact}</Nav.Link>
              
            </Nav>
          </div>

        </Container>

      </Navbar>

    </>
  )
}