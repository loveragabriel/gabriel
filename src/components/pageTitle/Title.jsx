import styles from './titles.module.css'
export default function Title(props){
    return(
        <div className={styles.title_container}>
          <h2 className={styles.main_title}>
            {props.Title}
        </h2>
        <span className={styles.title_background}>
            {props.Title}
        </span>
        </div>
      
    )
}