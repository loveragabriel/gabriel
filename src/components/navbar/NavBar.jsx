import style from './nav_bar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faLaptop, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const enlaces = [
    { name: 'Sobre mi', link: 'about', icon: faUser },
    { name: 'Proyectos', link: 'myprojects', icon: faLaptop },
    { name: 'Contacto', link: 'contact', icon: faEnvelope }
  ];

export default function NavBar (){

    return(
        <nav className={style.nav_bar}>
        <ul className={style.ul}>
            {
                enlaces.map((link, index)=>
                <Link key={index} href={`/${link.link}`}>
                        <FontAwesomeIcon  icon={link.icon} className={style.link_icon} />
                        </Link>
                )
            }
        </ul>
        <p className={style.home_link}>
        <Link href='/' className={style.name_link}>
        Home
        </Link>
        </p>
       
        </nav>

    )
}