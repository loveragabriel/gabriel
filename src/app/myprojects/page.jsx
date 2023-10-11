import styles from "./projects.module.css";
import Title from "@/components/pageTitle/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareJs,
  faCss3Alt,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <>
      <Title Title="Projects" />
      <div>
        <p className={styles.main_text}>
          Here are some of the projects that I had worked.{" "}
        </p>
        <section className={styles.cards_container}>
          <div className={styles.cards}>
            <h5>CRUD PROJECT</h5>
            <p>Web app for posting, updating, reading and deleting products.</p>
            <a href="https://github.com/loveragabriel/CRUD-web-app" target="_blank">Gitub Code</a>
            <a href="https://loveragabriel.github.io/CRUD-web-app/" target="_blank">Deploy</a>

          </div>
          <div className={styles.cards}>
            <h5>Proffesional Website</h5>
            <p>Website for Dental Services</p>
            <a href="https://github.com/loveragabriel/maja-app" target="_blank">Gitub Code</a>

          </div>
        </section>
      </div>
      <div className={styles.icons_container}>
        <FontAwesomeIcon icon={faSquareJs} className={styles.icons} />
        <FontAwesomeIcon icon={faCss3Alt} className={styles.icons} />
        <FontAwesomeIcon icon={faReact} className={styles.icons} />
        <FontAwesomeIcon icon={faGitAlt} className={styles.icons} />
        <FontAwesomeIcon icon={faDatabase} className={styles.icons} />
      </div>
    </>
  );
}
