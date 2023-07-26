import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Tooltip from '@mui/material/Tooltip';

import { IHabilidades, TypesSection } from "../interfaces/HabilidadesTecnologicas";
import { tecFront, tecBack } from "../helpers/assets-imgs";

import backend from "../assets/backend.png";
import programacion from "../assets/programacion.png";
import { useTranslation } from 'react-i18next';

function Skills() {

    const { t } = useTranslation("global");

    const [secHab, setSectionHabilidad] = useState<IHabilidades>(tecFront);
    const [section, setSection] = useState<string>("Vanilla");
    const [img, setImg] = useState<string>(programacion);

    const changeSection = (sectionChange: string) => {
        setSection(sectionChange);
    }

    const siguiente = () => {
        if (secHab === tecFront) {
            setSectionHabilidad(tecBack);
            setSection("Lenguajes");
            setImg(backend);
        }
        if (secHab === tecBack) {
            setSectionHabilidad(tecFront);
            setSection("Vanilla");
            setImg(programacion);
        }
    }

    const anterior = () => {
        if (secHab === tecBack) {
            setSectionHabilidad(tecFront);
            setSection("Vanilla");
            setImg(programacion);
        }
        if (secHab === tecFront) {
            setSectionHabilidad(tecBack);
            setSection("Lenguajes");
            setImg(backend);
        }
    }

    return (
        <>
            <section id="skills" className="habilidades-section">
                <div className="card-habilidades">
                    <div>
                        <h2> {t("skills.title")}...</h2>
                        {/* <a className="more-information" href={"/#"}>{t("skills.more-information")}...</a> */}
                        <div className="intro-habilidades">
                            <p>
                                {t("skills.description")}
                            </p>
                        </div>
                    </div>
                    <div className="habilidades-info">

                        <div className="arrow">
                            <KeyboardArrowLeftIcon onClick={anterior} sx={{ fontSize: "42px" }} />
                        </div>

                        <div className="main">
                            <div className="title">
                                <img width={128} height={128} src={img} alt="habilidades" className='img-section' />
                                <h3>{secHab.title}</h3>
                                <ul>
                                    {
                                        secHab.sections.map(sec => {
                                            return <li key={sec}
                                                onClick={() => changeSection(sec)}
                                                className={section === sec ? "li-selected" : ""} >
                                                {sec === TypesSection.vanilla && t("skills.technologies.vanilla")}
                                                {sec === TypesSection.languages && t("skills.technologies.languages")}
                                                {sec === TypesSection.frameworksLibraries && t("skills.technologies.frameworks-libraries")}
                                                {sec === TypesSection.databases && t("skills.technologies.databases")}
                                                {sec === TypesSection.others && t("skills.technologies.others")}
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="content">
                                {
                                    secHab.tecnologias.map((tec) => {
                                        return tec.section === section ?
                                            <div
                                                className={`animate__animated animate__fadeInDown`}
                                                key={tec.nombre} >
                                                <Tooltip title={tec.nombre.toUpperCase()} followCursor>
                                                    <img width={64} height={64} src={tec.link} alt={tec.nombre} />
                                                </Tooltip>
                                            </div> : ""
                                    })
                                }

                            </div>
                        </div>

                        <div className="arrow">
                            <KeyboardArrowRightIcon onClick={siguiente} sx={{ fontSize: "42px" }} />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Skills