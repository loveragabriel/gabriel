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
            <h5>Titulo del projecto</h5>
            <p>Description del projecto</p>
          </div>
          <div className={styles.cards}>
            <h5>Titulo del projecto</h5>
            <p>Description del projecto</p>
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
