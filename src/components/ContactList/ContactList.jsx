import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ constacts, onDelete }) {
  return (
    <ul className={css.list}>
      {constacts.map((constact) => (
        <li key={constact.id}>
          <Contact contactItem={constact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
