import { useState } from "react";

import css from "./App.module.css";

import ContactList from "./components/ContactList/ContactList";
import constactArr from "./contacts.json";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
/* import ContactForm from "./components/ContactForm/ContactForm"; */

export default function App() {
  const [filter, setFilter] = useState("");
  const [contactValue, setContactValue] = useState(constactArr);

  const addContact = (newContact) => {
    setContactValue((prevContats) => {
      return [...prevContats, newContact];
    });
  };
  const deleteContact = (constactId) => {
    setContactValue((prevContats) => {
      return prevContats.filter((contact) => contact.id !== constactId);
    });
  };

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onChange={setFilter} />
        <ContactList constacts={contactValue} onDelete={deleteContact} />
      </div>
    </>
  );
}
