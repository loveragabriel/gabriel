"use client";
import styles from "./contact.module.css";
import { useState } from "react";
export default function ContactForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      name: event.target.value,
    });
  };

  const sendEmail = () => {
    const { ...name } = dataForm;
    alert(dataForm.name, dataForm.email, dataForm.description);
  };

  return (
    <form className={styles.form}>
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
          placeholder="Description"
          name="description"
          onChange={handleChange}
        />
      </label>
      <button onClick={sendEmail}>Send</button>
    </form>
  );
}
