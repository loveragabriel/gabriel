import Image from 'next/image'
import styles from './page.module.css'
import HeroButton from '@/components/heroButton/Hero_Button'

export default function Home() {
  return (
    <main className={styles.main} >
      <h1 className={styles.main_text}>
        <span className={styles.text_name}>Gabriel Lovera</span>
        <span className={styles.text_title}>Desarrollador React
          <span className={styles.button_call_to_action}>
            <  HeroButton />
          </span>
        </span>
      </h1>
      <section>
      </section>
      <section className={styles.text_description}>
        <span className={styles.text_1}>
          Diseño
        </span>
        <span className={styles.text_2}>
          y
        </span>
        <span className={styles.text_3}>
          desarrollo
        </span>
        <span className={styles.text_4}>
          de
        </span>
        <span className={styles.text_5}>
          interfaces
        </span>
        <span className={styles.text_6}>
          de
        </span>
        <span className={styles.text_7}>
          usuarios.
        </span>
        <span className={styles.text_8}>
          Aprendo,
        </span>
        <span className={styles.text_9}>
          programo
        </span>
        <span className={styles.text_10}>
          itero.
        </span>
      </section>
    </main>
  )
}
