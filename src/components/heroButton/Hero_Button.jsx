import styles from './hero_button.module.css'
import Link from 'next/link'

export default function Hero_Button(){
    return(
 <Link href='/contact'>
        <button className={styles.button}>Contact me</button>
    </Link>    )
}
