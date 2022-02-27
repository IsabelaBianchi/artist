
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container px-4 px-lg-5">
    <ul className="navbar-nav ms-auto">
             
             <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
             </ul>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            
           <FontAwesomeIcon icon={faBars} />

        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
             
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
  )
}