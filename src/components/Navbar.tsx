import { HTMLAttributes, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

import cvDownload from "../assets/Ithan-Flores-CV.pdf";
import "../styles/main.scss";

function Navbar() {

    const [t, i18n] = useTranslation("global");
    const navRef = useRef<HTMLDivElement>(null);

    const showNavbar = () => {
        navRef.current?.classList.toggle("responsive_nav");
    }

    return (
        <>
            <header>
                <h1>Ithan Flores</h1>
                <div>
                    <nav ref={navRef}>
                        <LinkScroll
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            <a className="nav-item" href="#about"> {t("header.about")} </a>
                        </LinkScroll>
                        <LinkScroll
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            <a className="nav-item" href="#skills"> {t("header.skills")} </a>
                        </LinkScroll>
                        <LinkScroll
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            <a className="nav-item" href="#projects"> {t("header.projects")} </a>
                        </LinkScroll>
                        <select
                            onChange={(e) => i18n.changeLanguage(e.target.value)}
                            name="option-language" id="select-language">
                            <option value="en"> {t("language.english")} </option>
                            <option value="es"> {t("language.spanish")} </option>
                        </select>
                        <button className="btn-cv" >
                            <a href={cvDownload} download > {t("header.download")} CV</a>
                        </button>
                        <button className="nav-btn nav-close-btn" onClick={showNavbar} >
                            <FaTimes />
                        </button>
                    </nav>
                    <button className="nav-btn" onClick={showNavbar} >
                        <FaBars />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar