import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .length(9, "Must be exactly 9 digits")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const userNameId = useId();
  const userPhoneId = useId();

  const handleSubmit = (values, actions) => {
    console.log("handleSubmit", values);
    onAdd({
      id: Date.now(),
      name: actions.elements.username.value,
      number: actions.elements.phone.value,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "dfg", phone: "33435" }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.wrapperForm} onSubmit={handleSubmit}>
        <div className={css.wrapinput}>
          <label className={css.label} htmlFor={userNameId}>
            Name
          </label>
          <Field className={css.input} name="username" id={userNameId} />
          <ErrorMessage name="username" />
        </div>
        <div className={css.wrapinput}>
          <label className={css.label} htmlFor={userPhoneId}>
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="phone"
            id={userPhoneId}
          />
          <ErrorMessage name="phone" />
        </div>
        <div>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
