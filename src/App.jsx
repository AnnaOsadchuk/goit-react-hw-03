import { useState, useEffect } from "react";

import css from "./App.module.css";

import ContactList from "./components/ContactList/ContactList";
import contactArr from "./contacts.json";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

export default function App() {
  const [search, setSearch] = useState("");

  const [contacts, setContacts] = useState(() => {
    const savedUsers = window.localStorage.getItem("saved-contact");
    if (savedUsers !== null) {
      return JSON.parse(savedUsers);
    }
    return contactArr;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  const searchContacts = contacts.filter((contactValue) =>
    contactValue.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={search} onChange={setSearch} />
        <ContactList contacts={searchContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}
