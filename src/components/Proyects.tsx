import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

import "../styles/main.scss";
import { useTranslation } from 'react-i18next';

interface ICard {
    title: string;
    description: string;
    lista: string[];
    linkApp: string;
    linkrepo?: string;
}

function Proyects() {
    const { t } = useTranslation("global");
    const arrayCards: ICard[] = [
        {
            title: `${t("projects.app-subneteo.title")}`,
            description: `${t("projects.app-subneteo.description")}`,
            lista: [
                `${t("projects.app-subneteo.list.0")}`,
                `${t("projects.app-subneteo.list.1")}`,
                `${t("projects.app-subneteo.list.2")}`,
                `${t("projects.app-subneteo.list.3")}`,
                `${t("projects.app-subneteo.list.4")}`,
                `${t("projects.app-subneteo.list.5")}`,
            ],
            linkApp: "https://subneteo-app-addrian.vercel.app/",
            linkrepo: "https://github.com/addRian0-0/subneteo-app"
        },
        {
            title: `${t("projects.miniwiki-genshin.title")}`,
            description: `${t("projects.miniwiki-genshin.description")}`,
            lista: [
                `React.js`,
                `Redux Toolkit`,
                `Vite`,
                `Mui`,
                `Plantilla de HTML 5UP!`
            ],
            linkApp: "https://genshin-miniwiki-personal.vercel.app/",
            linkrepo: "https://github.com/addRian0-0/genshin-miniwiki-personal"
        },
        {
            title: `${t("projects.crypto-app.title")}`,
            description: `${t("projects.crypto-app.description")}`,
            lista: [
                `TypeScript`,
                `React-chartjs-2`,
                `React.js`,
                `Redux Toolkit`,
                `Vite`,
                `Mui`,
                `Plantilla de HTML 5UP!`
            ],
            linkApp: "https://crypto-app-rtk-ts.vercel.app/",
            linkrepo: "https://github.com/addRian0-0/crypto-app-rtk-ts"
        },
        {
            title: `${t("projects.personal-portfolio.title")}`,
            description: `${t("projects.personal-portfolio.description")}`,
            lista: [
                `Sass`,
                `Next.js`,
                `TypeScript`,
                `Mui`,
            ],
            linkApp: "https://portafolio-addrian.vercel.app/",
            linkrepo: "https://github.com/addRian0-0/portafolio-addrian"
        }
    ];
    return (
        <section id="projects">
            <div className="card-proyectos" >
                <h2>{t("projects.title")}...</h2>
                <div className="container-cards">
                    {
                        arrayCards.map(card => {
                            return <Card key={uuidv4()}
                                title={card.title}
                                description={card.description}
                                lista={card.lista}
                                linkApp={card.linkApp}
                                linkrepo={card.linkrepo}
                            />
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Proyects