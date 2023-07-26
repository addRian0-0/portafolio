import { useTranslation } from "react-i18next";

interface Props {
    title: string;
    description: string;
    lista: string[];
    linkApp: string;
    linkrepo?: string;
}

export default function Card({ title, description, lista, linkApp, linkrepo }: Props) {
    const { t } = useTranslation("global");
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>
                {description}
            </p>
            <ul>
                {
                    lista.map((li, index) => {
                        return <li key={`${li}${index}`} >{li}</li>
                    })
                }
            </ul>
            <div className="links">
                <a href={linkApp}>{t("projects.link-app")} </a>
                {
                    linkrepo ? <a href={linkrepo}>{t("projects.link-repo")}</a> : ""
                }
            </div>
        </div>
    )
}