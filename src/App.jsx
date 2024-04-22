import { useState } from "react";

import ContactList from "./components/ContactList/ContactList";
import constactArr from "./contacts.json";

import css from "./App.module.css";

import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  const [inputValue, setInputValue] = useState("Put the name");
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <SearchBox value={inputValue} onChange={setInputValue} />
        <p>{inputValue}</p>
        <ContactList constacts={constactArr} />
      </div>
    </>
  );
}
