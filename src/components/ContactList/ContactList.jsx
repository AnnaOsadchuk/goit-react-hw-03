import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((constact) => (
        <li key={constact.id}>
          <Contact contactItem={constact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
