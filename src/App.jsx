import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import constactArr from "./contacts.json";
import css from "./App.module.css";

/* import css from "./App.module.css"; */
/* const constacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const constactsJSON = JSON.stringify(constacts);
console.log(constactsJSON);
 */
export default function App() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactList constacts={constactArr} />
      </div>
    </>
  );
}

/*  <div>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div> */
