import styles from './titles.module.css'
export default function Title(props){
    return(
        <div>
          <h2 className={styles.main}>
            {props.Title}
        </h2>
        <span className={styles.title_background}>
            {props.Title}
        </span>
        </div>
      
    )
}