import Telegram from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "../styles/main.scss";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation("global");
    return (
        <footer className="footer">
            <div id="contacto" className="contacto">
                <div>
                    <a href="https://www.linkedin.com/in/ithan-addrian/">
                        <LinkedInIcon className="icon" sx={{ fontSize: "32px", color: "#eae7e7cc" }} />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/addRian0-0/">
                        <GitHubIcon className="icon" sx={{ fontSize: "32px", color: "#eae7e7cc" }} />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/c_addriann/">
                        <InstagramIcon className="icon" sx={{ fontSize: "32px", color: "#eae7e7cc" }} />
                    </a>
                </div>
                <div>
                    <a href="https://t.me/Ithanf">
                        <Telegram className="icon" sx={{ fontSize: "32px", color: "#eae7e7cc" }} />
                    </a>
                </div>
            </div>
            <div className="dereReser">
                <h4>
                    <span>&copy; Ithan Flores.</span>
                    <span> {t("footer.rights-reserved")} </span>
                </h4>
            </div>
        </footer>
    )
}

export default Footer