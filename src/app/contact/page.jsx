import styles from "./contact.module.css";
import Title from "@/components/pageTitle/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm"
export default function Contact() {
  return (
    <>
      <Title Title="Contact" />
      <p className={styles.contact_text}>
        Let&lsquo;s connect if you need a website for your business, a partner
        for your project or a talent for complete a teamwork. I would like to
        talk about new challenges.
      </p>
      <ContactForm/>
      <div className={styles.nextworks}>
        <a href="https://www.linkedin.com/in/loveragabriel/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
        </a>
        <a href="https://github.com/loveragabriel/" target="_blank">
          <FontAwesomeIcon icon={faGitAlt} className={styles.icons} />
        </a>
      </div>
    </>
  );
}
