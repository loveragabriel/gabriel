import styles from './projects.module.css';
import Title from '@/components/pageTitle/Title'
export default function Projects(){
    return(
        <>
        <Title Title='Projects'/>
        <p className={styles.main_text}>Here are some of the projects that I had worked. </p>
        </>
    )
}