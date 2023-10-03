import styles from './contact.module.css'
import Title from '@/components/pageTitle/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
        <>
            <Title Title='Contact' />
            <p clasessName={styles.contact_text}>Let's connect if you need a website for your business, a partner for your project or a talent for complete a teamwork. I would like to talk about new challenges.
            </p>
            <section clasessName={styles.nextworks}>
                <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
            </section>
        </>
    )
}
