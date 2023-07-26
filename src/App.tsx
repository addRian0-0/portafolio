import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import me from "./assets/me.jpeg";
import { useTranslation } from "react-i18next";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";

function App() {
  const { t } = useTranslation("global");
  return (
    <>
      <Navbar />

      <main>

        <section id="presentation">
          <div className="card-presentation">
            <div className="presentation-info">
              <h2 > {t("presentation.hello")} <span> Ithan Flores</span>.</h2>
              <p>
                {t("presentation.subtitle")}
              </p>
            </div>
            <div>
              <img src={me} alt="me" width={276} height={276} />
            </div>
          </div>
        </section>

        <section id="about">
          <div className="card-info">
            <div className="info">
              <h2> {t("presentation.more-about-me")}...</h2>
              <p>
                {t("presentation.me")} <span>Ithan Adrian Flores Zamora</span>,
                {t("presentation.description")}
              </p>
            </div>
          </div>
        </section>

        <Skills />
        <Proyects />

      </main>



      <Footer />
    </>
  )
}

export default App
