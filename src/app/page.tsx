import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main >
      <h1 className={styles.main_text}>
        <span className={styles.text_name}>Soy Gabriel Lovera</span>
         <span className={styles.text_title}>Desarrollador React</span>
      </h1>
    </main>
  )
}
