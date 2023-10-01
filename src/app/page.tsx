import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main} > 
      <h1 className={styles.main_text}>
        <span className={styles.text_name}>Gabriel Lovera</span>
        <span className={styles.text_title}>Desarrollador React</span>
      </h1>
      <section>

      </section>
      <section>
        Diseño y desarrollo de interfaces de usuario. Aprendo, programo e itero.
      </section>
    </main>
  )
}
