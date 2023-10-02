import Image from 'next/image'
import styles from './page.module.css'
import HeroButton from '@/components/heroButton/Hero_Button'

export default function Home() {
  return (
    <main className={styles.main} >
      <h1 className={styles.main_text}>
        <span className={styles.text_name}>Gabriel Lovera</span>
        <span className={styles.text_title}>React Developer
          <span className={styles.button_call_to_action}>
            <  HeroButton />
          </span>
        </span>
      </h1>
      <section>
      </section>
      <section className={styles.text_description}>
        <span className={styles.text_1}>
          Design
        </span>
        <span className={styles.text_2}>
          and
        </span>
        <span className={styles.text_3}>
          build
        </span>
        <span className={styles.text_4}>
          users
        </span>
        <span className={styles.text_5}>
          interfaces.
        </span>
        {/* <span className={styles.text_6}>
          de
        </span>
        <span className={styles.text_7}>
          usuarios.
        </span> */}
        <span className={styles.text_8}>
          I lern,
        </span>
        <span className={styles.text_9}>
          code and
        </span>
        <span className={styles.text_10}>
          iterate.
        </span>
      </section>
    </main>
  )
}
