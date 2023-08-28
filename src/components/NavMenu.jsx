import { Link } from "react-router-dom";
export default function NavMenu(params) {       
    return(
        <ul className={params.className}>
        <li id="home">
          <Link to="/">HOME</Link>
        </li>
        <li id="about-li">
          <Link to="about">ABOUT</Link>
        </li>
        <li id="project-li">
          <Link to="projects">PROJECTS</Link>
        </li>
        <li id="contact-li">
          <Link to="contact">CONTACT</Link>
        </li>
      </ul>
    )
    
}