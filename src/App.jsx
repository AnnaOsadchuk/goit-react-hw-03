import { useState } from "react";

import css from "./App.module.css";

import ContactList from "./components/ContactList/ContactList";
import constactArr from "./contacts.json";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
/* import ContactForm from "./components/ContactForm/ContactForm"; */

export default function App() {
  const [search, setSearch] = useState("");
  const [contactValues, setContactValue] = useState(constactArr);

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
  const searchContacts = contactValues.filter((contactValue) =>
    contactValue.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={search} onChange={setSearch} />
        <ContactList constacts={searchContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}
