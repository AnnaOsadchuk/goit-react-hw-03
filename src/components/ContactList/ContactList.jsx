import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ constacts }) {
  return (
    <ul className={css.list}>
      {constacts.map((constact) => (
        <li key={constact.id}>
          <Contact constactItem={constact} />
        </li>
      ))}
    </ul>
  );
}
