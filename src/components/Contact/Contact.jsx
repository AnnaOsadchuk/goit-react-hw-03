import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ constactItem: { name, number } }) {
  return (
    <div className={css.containerItem}>
      <div className={css.contText}>
        <p className={css.text}>
          <IoPerson className="my-icon" size="24" />
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt className="my-icon" size="24" />
          {number}
        </p>
      </div>
      <div className={css.contBtn}>
        <button className={css.btn}>Delete</button>
      </div>
    </div>
  );
}
