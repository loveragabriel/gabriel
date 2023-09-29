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
        <nav>
                        <FontAwesomeIcon icon={faBars} className={style.menu_icon} />

        <ul className={style.ul}>
            {
                enlaces.map((link, index)=>
                <Link key={index} href={`/${link.link}`}>
                        <FontAwesomeIcon  icon={link.icon} className={style.link_icon} />
                        </Link>
                )
            }
        </ul>
        </nav>

    )
}