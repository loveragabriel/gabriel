import Image from "next/image";
import styles from "./about.module.css";
import Title from "@/components/pageTitle/Title";
import Img from '@/assets/images/react_photo.jpg'
export default function About() {
  return (
    <div>
      <Title Title="About me" />
      <section className={styles.about_container}>
        <div className={styles.text_description}>
        <p className={styles.text_1}>
          Hello! I&lsquo;m a{" "}
          <span className={styles.react_developer}>React Developer</span>{" "}
          oriented on building responsive web sites and interactive web applications. 
          My journey in the world of web development began with a fascination for the
          interactivity of websites.
        </p>
        <p>
          I discovered the power of building projects using reusable components in React. 
          Which makes me feel motivated to become proficient in creating interactive, 
          modern web applications. From building hydrating components by fetching and 
          mapping data, as it allows me to provide more meaningful and dynamic user experiences.
          And then to styling with CSS, always with mind into the mobile-first philosophy. 
        </p>
        <p>
          Each project and idea just makes true by the interactive process of design, 
          code and test. In this sense to work with git, has provided me the organisation 
          for tracking branch, feature and to revise errors. The git workflow makes the process
          of coding more light and soft and easy for working with other collaborators.
        </p>
          <p>
            I am still learning new technologies, tools and facing new challenges that will
            become more proficient in development.
          </p>
        <section>
          💆 Also  I enjoy staying active, so complement my proffesinal life
          with others activities:
          <h5>Run 🏃‍♂️</h5>
          <h5>Comunities:</h5>
          <span>React Buenos Aires</span> <br />
          <span>Mundolingo</span>
        </section>
        </div>
        <Image className={styles.image} src={Img} alt='text' height={300} width={350} />  
      </section>
    </div>
  );
}
