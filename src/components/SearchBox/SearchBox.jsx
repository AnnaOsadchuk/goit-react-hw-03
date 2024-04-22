import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.wrapper}>
      <span className={css.text}>Find contacts by name</span>
      <input
        type="text"
        className={css.userLook}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
}
