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
          oriented on building websites and web apps.
        </p>
        <p>
          Learning programming is an incredible journey that has challenged me
          to see coding in a new vision, allowing me to enjoy the learning
          process. From the fundamentals of programming to workflow and from the
          best practices and how to improve daily a clean code.
        </p>
        <p>
          I&lsquo;m in this process by facing new challenges, learning new
          thecnologies and something that I love very much is the iterative
          process of improving.
        </p>
        <section>
          💆 Also  I enjoy staying active, so complement my proffesinal life
          with others activities:
          <h5>Run 🏃‍♂️</h5>
          <h6>Comunities:</h6>
          <span>React Buenos Aires</span> <br />
          <span>Mundolingo</span>
        </section>
        </div>
        <Image className={styles.image} src={Img} alt='text' height={300} width={350} />  
      </section>
    </div>
  );
}
