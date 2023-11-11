"use client";
import styles from "./contact.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      dataForm.name === "" ||
      dataForm.email === "" ||
      dataForm.message === ""
    ) {
      alert("Kindly fill out all the required fields on the form");
    } else {
      emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE}`,
          e.target,
          `${process.env.NEXT_PUBLIC_EMAILJS_API_KEY}`
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      e.target.reset();
    }
  };

  return (
    <form className={styles.form} onSubmit={sendEmail}>
      <label className={styles.inputForm}>
        {" "}
        Name
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
      </label>
      <label className={styles.inputForm}>
        Email
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
      </label>
      <label className={styles.inputForm}>
        Description
        <input
          type="text"
          placeholder="Message"
          name="message"
          onChange={handleChange}
        />
      </label>
      <button className={styles.send_button} type="submit">
        Send
      </button>
    </form>
  );
}
