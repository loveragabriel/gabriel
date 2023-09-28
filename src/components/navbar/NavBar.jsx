import style from './nav_bar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const enlaces = ['Sobre mi', 'Proyectos', 'Conatcto']

export default function NavBar (){

    return(
        <nav>
                        <FontAwesomeIcon icon={faBars} className={style.menu_icon} />

        <ul className={style.ul}>
            {
                enlaces.map((link, index)=>
                    <li key={index} className={style.link}>{link}</li>
                )
            }
        </ul>
        </nav>

    )
}